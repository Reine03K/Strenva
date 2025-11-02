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
    required: true,
    maxlength: 5000
  },
  requiredSkills: [String],
  requiredProfile: {
    type: String,
    enum: ['student', 'alumni', 'teacher', 'any'],
    required: true
  },
  duration: {
    type: String,
    enum: ['short', 'medium', 'long'],
    required: true
  },
  budget: {
    type: Number,
    required: true
  },
  budgetCurrency: {
    type: String,
    default: 'EUR'
  },
  location: {
    type: String,
    enum: ['remote', 'onsite', 'hybrid']
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'closed', 'filled'],
    default: 'draft'
  },
  selectedCandidates: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Application'
  }],
  deadline: Date,
  isPaidPromotion: {
    type: Boolean,
    default: false
  },
  promotedUntil: Date
}, {
  timestamps: true
});

module.exports = mongoose.model('Job', jobSchema);

