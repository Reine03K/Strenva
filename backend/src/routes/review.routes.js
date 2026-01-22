const express = require('express');
const router = express.Router();
const {
  getReviews,
  createReview
} = require('../controllers/review.controller');
const { protect } = require('../middleware/auth.middleware');

router.get('/', getReviews);
router.post('/', protect, createReview);

module.exports = router;

