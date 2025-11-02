const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  companyName: {
    type: String,
    required: true,
    trim: true
  },
  industry: {
    type: String,
    required: true
  },
  size: {
    type: String,
    enum: ['startup', 'small', 'medium', 'large', 'enterprise']
  },
  description: {
    type: String,
    maxlength: 1000
  },
  address: {
    street: String,
    city: String,
    postalCode: String,
    country: String
  },
  website: String,
  logo: String,
  contactPerson: {
    firstName: String,
    lastName: String,
    position: String,
    phone: String
  },
  subscriptionType: {
    type: String,
    enum: ['free', 'premium', 'enterprise'],
    default: 'free'
  },
  subscriptionExpiresAt: Date,
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Company', companySchema);

