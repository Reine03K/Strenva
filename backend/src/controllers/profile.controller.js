const Student = require('../models/Student');
const Worker = require('../models/Worker');
const Refugee = require('../models/Refugee');
const User = require('../models/User');

// Get current user's profile
exports.getMyProfile = async (req, res) => {
  try {
    let profile;
    
    switch (req.user.role) {
      case 'student':
        profile = await Student.findOne({ userId: req.user.id });
        break;
      case 'workers':
        profile = await Worker.findOne({ userId: req.user.id });
        break;
      case 'refugees':
        profile = await Refugee.findOne({ userId: req.user.id });
        break;
    }

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.status(200).json({
      success: true,
      data: profile
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update profile
exports.updateProfile = async (req, res) => {
  try {
    let profile;
    let ProfileModel;
    
    switch (req.user.role) {
      case 'student':
        ProfileModel = Student;
        break;
      case 'workers':
        ProfileModel = Worker;
        break;
      case 'refugees':
        ProfileModel = Refugee;
        break;
      default:
        return res.status(400).json({ message: 'Invalid role' });
    }

    profile = await ProfileModel.findOne({ userId: req.user.id });

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    const updatedProfile = await ProfileModel.findByIdAndUpdate(
      profile._id,
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      data: updatedProfile
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get public profile (for viewing by others)
exports.getPublicProfile = async (req, res) => {
  try {
    const { role, id } = req.params;
    let profile;

    switch (role) {
      case 'student':
        profile = await Student.findById(id)
          .select('-contactedReferences -pendingMessages');
        break;
      case 'workers':
        profile = await Worker.findById(id)
          .select('-contactedReferences -pendingMessages -contactsUsed');
        break;
      case 'refugees':
        profile = await Refugee.findById(id);
        break;
      default:
        return res.status(400).json({ message: 'Invalid role' });
    }

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.status(200).json({
      success: true,
      data: profile
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
