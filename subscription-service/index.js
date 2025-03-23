const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const subscriptionRoutes = require('./routes/subscriptionRoutes');
require('dotenv').config();  // For environment variables


const app = express();
const PORT = process.env.PORT || 5001; // Default to port 5001


// Middleware
app.use(cors());                 // Allow cross-origin requests
app.use(bodyParser.json());      // Parse incoming JSON requests



// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })  
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('Error connecting to MongoDB:', error));

// API Routes
app.use('/api/subscription', subscriptionRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Subscription service is running on port ${PORT}`);
});