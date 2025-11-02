const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true
  },
  mobility: {
    type: String,
    enum: ['local', 'regional', 'national', 'international']
  },
  icamCampus: {
    type: String,
    required: true
  },
  currentLevel: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  skills: [{
    name: String,
    level: String
  }],
  experiences: [{
    title: String,
    company: String,
    duration: String,
    description: String,
    validatedBy: String
  }],
  cvLink: {
    type: String
  },
  profilePhoto: {
    type: String
  },
  bio: {
    type: String,
    maxlength: 500
  },
  availability: {
    type: Boolean,
    default: true
  },
  technicalTestCompleted: {
    type: Boolean,
    default: false
  },
  technicalTestScore: {
    type: Number,
    min: 0,
    max: 100
  },
  idVerified: {
    type: Boolean,
    default: false
  },
  idDocument: {
    type: String
  },
  contactedReferences: [{
    name: String,
    email: String,
    company: String,
    status: {
      type: String,
      enum: ['pending', 'accepted', 'refused'],
      default: 'pending'
    }
  }],
  pendingMessages: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Student', studentSchema);

