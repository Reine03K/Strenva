const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true
  },
  applicantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  applicantType: {
    type: String,
    enum: ['student', 'alumni', 'teacher'],
    required: true
  },
  applicantProfile: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'applicantTypeModel'
  },
  applicantTypeModel: {
    type: String,
    enum: ['Student', 'Alumni', 'Teacher']
  },
  status: {
    type: String,
    enum: ['pending', 'shortlisted', 'test_pending', 'test_completed', 'rejected', 'selected'],
    default: 'pending'
  },
  testResult: {
    score: Number,
    maxScore: Number,
    completedAt: Date,
    answers: [mongoose.Schema.Types.Mixed]
  },
  appliedAt: {
    type: Date,
    default: Date.now
  },
  testDeadline: Date,
  companyNotes: String,
  applicantNotes: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Application', applicationSchema);

