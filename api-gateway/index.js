const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');

// Configuration for the services
const subscriptionServiceUrl = 'http://localhost:5001/api/subscription';
const emailServiceUrl = 'http://localhost:5002/api/email';

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());
// Route for subscribing a user
app.post('/subscribe', async (req, res) => {
  try {
    const response = await axios.post(`${subscriptionServiceUrl}/subscribe`, req.body);
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error subscribing user' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`API Gateway is running on port ${port}`);
});
