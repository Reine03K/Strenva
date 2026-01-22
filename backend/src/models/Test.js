const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true
  },
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
  type: {
    type: String,
    enum: ['technical', 'human', 'mixed'],
    default: 'mixed'
  },
  questions: [{
    question: String,
    type: {
      type: String,
      enum: ['multiple-choice', 'coding', 'essay', 'practical']
    },
    options: [String], // For multiple choice
    correctAnswer: String,
    points: Number,
    required: {
      type: Boolean,
      default: true
    }
  }],
  practicalCase: {
    description: String,
    requirements: [String],
    deliverables: [String],
    evaluationCriteria: [String]
  },
  validatedByCompany: {
    type: Boolean,
    default: false
  },
  validatedAt: {
    type: Date
  },
  deadline: {
    type: Number, // Days from assignment
    default: 2
  },
  applications: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Application'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Test', testSchema);
