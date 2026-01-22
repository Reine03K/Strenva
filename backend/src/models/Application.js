const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true
  },
  candidateId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  candidateModel: {
    type: String,
    enum: ['Student', 'Worker'],
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'selected', 'test-assigned', 'test-completed', 'test-passed', 'test-failed', 'accepted', 'rejected'],
    default: 'pending'
  },
  testAssigned: {
    type: Boolean,
    default: false
  },
  testId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Test'
  },
  testDeadline: {
    type: Date
  },
  testCompleted: {
    type: Boolean,
    default: false
  },
  testCompletedAt: {
    type: Date
  },
  testScore: {
    type: Number,
    min: 0,
    max: 100
  },
  testResults: {
    technicalScore: Number,
    humanScore: Number,
    overallScore: Number,
    feedback: String
  },
  selectedByCompany: {
    type: Boolean,
    default: false
  },
  selectedAt: {
    type: Date
  },
  coverLetter: {
    type: String
  },
  notes: {
    type: String
  }
}, {
  timestamps: true
});

// Index for efficient queries
applicationSchema.index({ jobId: 1, candidateId: 1 });
applicationSchema.index({ candidateId: 1, status: 1 });

module.exports = mongoose.model('Application', applicationSchema);
