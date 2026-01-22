const express = require('express');
const router = express.Router();
const {
  getApplications,
  getApplication,
  createApplication,
  updateApplication,
  submitTest
} = require('../controllers/application.controller');
const { protect, authorize } = require('../middleware/auth.middleware');

router.get('/', protect, getApplications);
router.get('/:id', protect, getApplication);
router.post('/', protect, authorize('student', 'workers'), createApplication);
router.put('/:id', protect, updateApplication);
router.post('/:id/test', protect, authorize('student', 'workers'), submitTest);

module.exports = router;

