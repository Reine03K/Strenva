const User = require('../models/User');
const Student = require('../models/Student');
const workers= require('../models/workers');
const visitors = require('../models/Visitors');


// Register a new user
exports.register = async (req, res) => {
  try {
    const { email, password, role, profileData } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create user
    const user = await User.create({ email, password, role });

    // Create profile based on role
    let profile;
    switch (role) {
      case 'student':
        profile = await Student.create({ userId: user._id, ...profileData });
        break;
      case 'workers':
        profile = await workers.create({ userId: user._id, ...profileData });
        break;
      case 'visitors':
        profile = await visitors.create({ userId: user._id, ...profileData });
        break;
    
    }

    // Generate token
    const token = user.generateToken();

    res.status(201).json({
      success: true,
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        profile: profile
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate token
    const token = user.generateToken();

    res.status(200).json({
      success: true,
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get current user
exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    // Get profile based on role
    let profile;
    switch (user.role) {
      case 'student':
        profile = await Student.findOne({ userId: user._id });
        break;
      case 'workers':
        profile = await workers.findOne({ userId: user._id });
        break;
      case 'visitors':
        profile = await visitors.findOne({ userId: user._id });
        break;
    }

    res.status(200).json({
      success: true,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        profile: profile
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

