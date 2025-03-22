const mongoose = require('mongoose');

// Define the Subscriber schema
const subscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Ensures no duplicate email subscriptions
    trim: true,
    lowercase: true,
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a model from the schema
const Subscriber = mongoose.model('Subscriber', subscriberSchema);

module.exports = Subscriber;
