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
  legalName: {
    type: String,
    required: true
  },
  siret: {
    type: String,
    unique: true,
    sparse: true
  },
  address: {
    street: String,
    city: String,
    postalCode: String,
    country: String
  },
  contactPerson: {
    firstName: String,
    lastName: String,
    position: String,
    phone: String
  },
  description: {
    type: String,
    maxlength: 1000
  },
  industry: {
    type: String
  },
  website: {
    type: String
  },
  logo: {
    type: String
  },
  isPartner: {
    type: Boolean,
    default: false
  },
  subscriptionType: {
    type: String,
    enum: ['free', 'premium', 'enterprise'],
    default: 'free'
  },
  jobsPosted: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job'
  }],
  reviewsGiven: [{
    talentId: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: 'talentModel'
    },
    talentModel: {
      type: String,
      enum: ['Student', 'Alumni']
    },
    rating: Number,
    comment: String,
    createdAt: Date
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Company', companySchema);
