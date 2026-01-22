const mongoose = require('mongoose');

const refugeeSchema = new mongoose.Schema({
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
    type: String
  },
  specializations: [String],
  skills: [{
    name: String,
    description: String
  }],
  trainingExperience: [{
    type: String,
    description: String
  }],
  researchTopics: [String],
  areasOfExpertise: [String],
  bio: {
    type: String,
    maxlength: 500
  },
  canProvideTraining: {
    type: Boolean,
    default: true
  },
  typeOfIntervention: [{
    type: String,
    enum: ['technical', 'managerial', 'organizational', 'research', 'innovation']
  }],
  availability: {
    type: Boolean,
    default: true
  },
  idVerified: {
    type: Boolean,
    default: false
  },
  idDocument: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Refugee', refugeeSchema);
