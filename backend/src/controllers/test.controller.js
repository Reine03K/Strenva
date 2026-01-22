const Test = require('../models/Test');
const Job = require('../models/Job');
const Application = require('../models/Application');

// Get test by ID
exports.getTest = async (req, res) => {
  try {
    const test = await Test.findById(req.params.id)
      .populate('jobId');

    if (!test) {
      return res.status(404).json({ message: 'Test not found' });
    }

    res.status(200).json({
      success: true,
      data: test
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create test for a job
exports.createTest = async (req, res) => {
  try {
    const { jobId, ...testData } = req.body;

    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    const test = await Test.create({
      ...testData,
      jobId
    });

    // Update job
    job.testId = test._id;
    job.testGenerated = true;
    await job.save();

    res.status(201).json({
      success: true,
      data: test
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Validate test
exports.validateTest = async (req, res) => {
  try {
    const test = await Test.findById(req.params.id);
    if (!test) {
      return res.status(404).json({ message: 'Test not found' });
    }

    test.validatedByCompany = true;
    test.validatedAt = new Date();
    await test.save();

    res.status(200).json({
      success: true,
      data: test
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
