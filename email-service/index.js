const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const emailRoutes = require('./routes/emailRoutes');
const mongoose = require('mongoose');
require('./services/weeklyUpdateScheduler');
require('dotenv').config();  // For environment variables



const app = express();
const PORT = process.env.PORT || 5002; // Default to port 5002


// Middleware
app.use(cors());                 // Allow cross-origin requests
app.use(bodyParser.json());      // Parse incoming JSON requests

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, 
     socketTimeoutMS: 45000,
  })  
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('Error connecting to MongoDB:', error));


// API Routes
app.use('/api/email', emailRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Email service is running on port ${PORT}`);
});