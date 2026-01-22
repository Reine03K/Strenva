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
  diploma: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  professionalExperiences: [{
    title: String,
    company: String,
    duration: String,
    responsibilities: [String],
    results: String,
    validatedBy: String
  }],
  keySkills: [{
    name: String,
    level: String,
    tools: [String]
  }],
  projects: [{
    title: String,
    description: String,
    technologies: [String],
    duration: String
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
  availabilityType: {
    type: String,
    enum: ['short-term', 'long-term', 'both', 'job-seeking'],
    default: 'both'
  },
  skillsValidated: {
    type: Boolean,
    default: false
  },
  idVerified: {
    type: Boolean,
    default: false
  },
  idDocument: {
    type: String
  },
  companyReviews: [{
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company'
    },
    rating: Number,
    comment: String,
    createdAt: Date
  }],
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
  subscriptionType: {
    type: String,
    enum: ['free', 'premium'],
    default: 'free'
  },
  freeContactLimit: {
    type: Number,
    default: 3
  },
  contactsUsed: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Alumni', alumniSchema);
