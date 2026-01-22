const express = require('express');
const router = express.Router();
const {
  getCompanies,
  getCompany,
  getMyCompany,
  updateCompany
} = require('../controllers/company.controller');
const { protect, authorize } = require('../middleware/auth.middleware');

router.get('/', getCompanies);
// Company routes removed - no longer used
router.get('/', (req, res) => {
  res.json({ message: 'Company routes are no longer available' });
});

module.exports = router;

