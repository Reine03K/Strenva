const Review = require('../models/Review');
const Student = require('../models/Student');
const Worker = require('../models/Worker');

// Get reviews for a profile
exports.getReviews = async (req, res) => {
  try {
    const { reviewedId, reviewedModel } = req.query;

    const reviews = await Review.find({
      reviewedId,
      reviewedModel,
      isPublic: true
    })
      .populate('reviewerId', 'companyName firstName lastName')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: reviews.length,
      data: reviews
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create review
exports.createReview = async (req, res) => {
  try {
    const { reviewedId, reviewedModel, rating, comment, categories, jobId } = req.body;
    
    let reviewerModel;
    if (req.user.role === 'student') {
      reviewerModel = 'Student';
    } else if (req.user.role === 'workers') {
      reviewerModel = 'Worker';
    } else {
      return res.status(403).json({ message: 'Cannot create reviews' });
    }

    // Get reviewer profile
    let reviewerProfile;
    if (req.user.role === 'student') {
      reviewerProfile = await Student.findOne({ userId: req.user.id });
    } else if (req.user.role === 'workers') {
      reviewerProfile = await Worker.findOne({ userId: req.user.id });
    }

    if (!reviewerProfile) {
      return res.status(404).json({ message: 'Reviewer profile not found' });
    }

    const review = await Review.create({
      reviewerId: reviewerProfile._id,
      reviewerModel,
      reviewedId,
      reviewedModel,
      rating,
      comment,
      categories,
      jobId
    });

    res.status(201).json({
      success: true,
      data: review
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
