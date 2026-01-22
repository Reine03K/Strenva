const express = require('express');
const router = express.Router();
const {
  getMessages,
  sendMessage,
  markAsRead
} = require('../controllers/message.controller');
const { protect } = require('../middleware/auth.middleware');

router.get('/', protect, getMessages);
router.post('/', protect, sendMessage);
router.put('/:id/read', protect, markAsRead);

module.exports = router;

