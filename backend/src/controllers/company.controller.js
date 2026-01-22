const Company = require('../models/Company');
const User = require('../models/User');

// Get all companies
exports.getCompanies = async (req, res) => {
  try {
    const companies = await Company.find()
      .select('-jobsPosted -reviewsGiven')
      .sort({ companyName: 1 });

    res.status(200).json({
      success: true,
      count: companies.length,
      data: companies
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single company
exports.getCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id)
      .populate('jobsPosted');

    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }

    res.status(200).json({
      success: true,
      data: company
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get current user's company profile
exports.getMyCompany = async (req, res) => {
  try {
    const company = await Company.findOne({ userId: req.user.id })
      .populate('jobsPosted');

    if (!company) {
      return res.status(404).json({ message: 'Company profile not found' });
    }

    res.status(200).json({
      success: true,
      data: company
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update company profile
exports.updateCompany = async (req, res) => {
  try {
    const company = await Company.findOne({ userId: req.user.id });

    if (!company) {
      return res.status(404).json({ message: 'Company profile not found' });
    }

    const updatedCompany = await Company.findByIdAndUpdate(
      company._id,
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      data: updatedCompany
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
