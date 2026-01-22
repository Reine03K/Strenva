const Application = require('../models/Application');
const Job = require('../models/Job');
const Student = require('../models/Student');
const Worker = require('../models/Worker');

// Get all applications
exports.getApplications = async (req, res) => {
  try {
    const { jobId, candidateId, status } = req.query;
    const query = {};

    if (jobId) query.jobId = jobId;
    if (candidateId) query.candidateId = candidateId;
    if (status) query.status = status;

    const applications = await Application.find(query)
      .populate('jobId')
      .populate('testId')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: applications.length,
      data: applications
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single application
exports.getApplication = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id)
      .populate('jobId')
      .populate('testId');

    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    res.status(200).json({
      success: true,
      data: application
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create application (Student/Alumni)
exports.createApplication = async (req, res) => {
  try {
    const { jobId, coverLetter } = req.body;
    const userId = req.user.id;

    // Check if job exists
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    // Get candidate profile
    let candidateProfile;
    let candidateModel;
    
    if (req.user.role === 'student') {
      candidateProfile = await Student.findOne({ userId });
      candidateModel = 'Student';
    } else if (req.user.role === 'workers') {
      candidateProfile = await Worker.findOne({ userId });
      candidateModel = 'Worker';
    } else {
      return res.status(403).json({ message: 'Only students and workers can apply' });
    }

    if (!candidateProfile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    // Check if already applied
    const existingApplication = await Application.findOne({
      jobId,
      candidateId: candidateProfile._id,
      candidateModel
    });

    if (existingApplication) {
      return res.status(400).json({ message: 'Already applied to this job' });
    }

    // Create application
    const application = await Application.create({
      jobId,
      candidateId: candidateProfile._id,
      candidateModel,
      coverLetter,
      status: 'pending'
    });

    // Add to job's applications array
    job.applications.push(application._id);
    await job.save();

    res.status(201).json({
      success: true,
      data: application
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update application status (Company or System)
exports.updateApplication = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    const updatedApplication = await Application.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      data: updatedApplication
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Submit test results
exports.submitTest = async (req, res) => {
  try {
    const { testResults, testScore } = req.body;
    const application = await Application.findById(req.params.id);

    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    if (application.testCompleted) {
      return res.status(400).json({ message: 'Test already submitted' });
    }

    // Check deadline
    if (application.testDeadline && new Date() > application.testDeadline) {
      return res.status(400).json({ message: 'Test deadline has passed' });
    }

    application.testCompleted = true;
    application.testCompletedAt = new Date();
    application.testScore = testScore;
    application.testResults = testResults;
    application.status = 'test-completed';

    await application.save();

    res.status(200).json({
      success: true,
      data: application
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
