const express = require('express');
const router = express.Router();
const {
  getTest,
  createTest,
  validateTest
} = require('../controllers/test.controller');
const { protect, authorize } = require('../middleware/auth.middleware');

router.get('/:id', protect, getTest);
router.post('/', protect, createTest);
router.put('/:id/validate', protect, validateTest);

module.exports = router;

