const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  reviewerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: 'reviewerModel'
  },
  reviewerModel: {
    type: String,
    enum: ['Student', 'Worker'],
    required: true
  },
  reviewedId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: 'reviewedModel'
  },
  reviewedModel: {
    type: String,
    enum: ['Student', 'Worker', 'Refugee'],
    required: true
  },
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job'
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  comment: {
    type: String,
    maxlength: 1000
  },
  categories: {
    professionalism: Number,
    communication: Number,
    technicalSkills: Number,
    reliability: Number,
    qualityOfWork: Number
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  isPublic: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index for efficient queries
reviewSchema.index({ reviewedId: 1, reviewedModel: 1 });
reviewSchema.index({ reviewerId: 1, reviewerModel: 1 });

module.exports = mongoose.model('Review', reviewSchema);
