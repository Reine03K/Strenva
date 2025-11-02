const mongoose = require('mongoose');

const alumniSchema = new mongoose.Schema({
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
  degree: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  professionalExperience: [{
    company: String,
    position: String,
    startDate: Date,
    endDate: Date,
    description: String,
    validatedBy: String
  }],
  skills: [{
    name: String,
    proficiency: String
  }],
  toolsAndTechnologies: [String],
  projects: [{
    title: String,
    description: String,
    technologies: [String],
    result: String
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
  lookingForJob: {
    type: Boolean,
    default: false
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
  },
  verified: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Alumni', alumniSchema);

