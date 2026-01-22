const Job = require('../models/Job');
const Application = require('../models/Application');
const Student = require('../models/Student');
const Worker = require('../models/Worker');

// Get all published jobs
exports.getJobs = async (req, res) => {
  try {
    const { status, companyId, search } = req.query;
    const query = { status: 'published' };

    if (companyId) {
      query.companyId = companyId;
    }
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    const jobs = await Job.find(query)
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: jobs.length,
      data: jobs
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single job
exports.getJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id)
      .populate('applications');

    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    res.status(200).json({
      success: true,
      data: job
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create job
exports.createJob = async (req, res) => {
  try {
    const jobData = {
      ...req.body
    };

    const job = await Job.create(jobData);

    res.status(201).json({
      success: true,
      data: job
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update job
exports.updateJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      data: updatedJob
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete job
exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    await job.remove();

    res.status(200).json({
      success: true,
      message: 'Job deleted'
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get matching candidates for a job (3-5 candidates)
exports.getMatchingCandidates = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    // Simple matching algorithm - can be enhanced
    const requiredSkills = job.requiredSkills.map(s => s.name.toLowerCase());
    
    // Find students matching skills
    const students = await Student.find({
      availability: true,
      $or: [
        { 'skills.name': { $in: requiredSkills } },
        { specialization: { $regex: job.title, $options: 'i' } }
      ]
    }).limit(5);

    // Find workers matching skills
    const workers = await Worker.find({
      availability: true,
      $or: [
        { 'keySkills.name': { $in: requiredSkills } },
        { specialization: { $regex: job.title, $options: 'i' } }
      ]
    }).limit(5);

    // Combine and limit to 3-5 candidates
    const candidates = [...students, ...workers].slice(0, 5);

    res.status(200).json({
      success: true,
      count: candidates.length,
      data: candidates
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
