const Message = require('../models/Message');
const Student = require('../models/Student');
const Worker = require('../models/Worker');

// Get messages for current user
exports.getMessages = async (req, res) => {
  try {
    const { conversationWith } = req.query;
    const userId = req.user.id;

    let query = {
      $or: [
        { senderId: userId },
        { receiverId: userId }
      ]
    };

    if (conversationWith) {
      query = {
        $or: [
          { senderId: userId, receiverId: conversationWith },
          { senderId: conversationWith, receiverId: userId }
        ]
      };
    }

    const messages = await Message.find(query)
      .sort({ createdAt: 1 });

    res.status(200).json({
      success: true,
      count: messages.length,
      data: messages
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Send message
exports.sendMessage = async (req, res) => {
  try {
    const { receiverId, content, jobId, applicationId, type } = req.body;
    const senderId = req.user.id;

    // Check if this is an initial contact and if user has remaining contacts
    if (type === 'initial-contact') {
      if (req.user.role === 'student') {
        const student = await Student.findOne({ userId: senderId });
        if (student && student.contactsUsed >= student.freeContactLimit && student.subscriptionType === 'free') {
          return res.status(403).json({ 
            message: 'Free contact limit reached. Please upgrade to premium.' 
          });
        }
      } else if (req.user.role === 'workers') {
        const worker = await Worker.findOne({ userId: senderId });
        if (worker && worker.contactsUsed >= worker.freeContactLimit && worker.subscriptionType === 'free') {
          return res.status(403).json({ 
            message: 'Free contact limit reached. Please upgrade to premium.' 
          });
        }
      }
    }

    const message = await Message.create({
      senderId,
      senderModel: 'User',
      receiverId,
      receiverModel: 'User',
      content,
      jobId,
      applicationId,
      type: type || 'general',
      isInitialContact: type === 'initial-contact'
    });

    // Update contact count if initial contact
    if (type === 'initial-contact') {
      if (req.user.role === 'student') {
        const student = await Student.findOne({ userId: senderId });
        if (student) {
          student.contactsUsed += 1;
          await student.save();
        }
      } else if (req.user.role === 'workers') {
        const worker = await Worker.findOne({ userId: senderId });
        if (worker) {
          worker.contactsUsed += 1;
          await worker.save();
        }
      }
    }

    res.status(201).json({
      success: true,
      data: message
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mark message as read
exports.markAsRead = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);

    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }

    if (message.receiverId.toString() !== req.user.id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    message.isRead = true;
    message.readAt = new Date();
    await message.save();

    res.status(200).json({
      success: true,
      data: message
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
