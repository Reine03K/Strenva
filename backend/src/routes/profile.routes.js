const express = require('express');
const router = express.Router();
const {
  getMyProfile,
  updateProfile,
  getPublicProfile
} = require('../controllers/profile.controller');
const { protect } = require('../middleware/auth.middleware');

router.get('/me', protect, getMyProfile);
router.put('/me', protect, updateProfile);
router.get('/:role/:id', getPublicProfile);

module.exports = router;

