const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  missionDescription: {
    type: String,
    required: true
  },
  requiredSkills: [{
    name: String,
    level: String,
    required: {
      type: Boolean,
      default: true
    }
  }],
  expectations: [String],
  budget: {
    min: Number,
    max: Number,
    currency: {
      type: String,
      default: 'EUR'
    }
  },
  duration: {
    type: String,
    enum: ['short-term', 'medium-term', 'long-term', 'project-based']
  },
  location: {
    type: String,
    enum: ['remote', 'on-site', 'hybrid']
  },
  city: String,
  status: {
    type: String,
    enum: ['draft', 'published', 'closed', 'filled'],
    default: 'draft'
  },
  selectedCandidates: [{
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'candidateModel'
  }],
  candidateModel: {
    type: String,
    enum: ['Student', 'Worker']
  },
  testGenerated: {
    type: Boolean,
    default: false
  },
  testId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Test'
  },
  applications: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Application'
  }],
  publishedAt: Date,
  closedAt: Date
}, {
  timestamps: true
});

module.exports = mongoose.model('Job', jobSchema);
