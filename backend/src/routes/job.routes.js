const express = require('express');
const router = express.Router();
const {
  getJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
  getMatchingCandidates
} = require('../controllers/job.controller');
const { protect, authorize } = require('../middleware/auth.middleware');

router.get('/', getJobs);
router.get('/:id', getJob);
router.get('/:id/candidates', protect, getMatchingCandidates);
router.post('/', protect, createJob);
router.put('/:id', protect, updateJob);
router.delete('/:id', protect, deleteJob);

module.exports = router;

