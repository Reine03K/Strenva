const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
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
  campus: {
    type: String,
    required: true
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
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Teacher', teacherSchema);

