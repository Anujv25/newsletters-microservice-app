const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');




// Configuration for the services
const subscriptionServiceUrl = 'http://localhost:5001/api/subscription';


// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());


  
// Route for subscribing a user
app.post('/subscribe', async (req, res) => {
  try {
    const response = await axios.post(`${subscriptionServiceUrl}/subscribe`, req.body);
    res.status(response.status).json(response.data);
  } catch (error) {
    if(error.response && error.response.status === 400){
      res.status(400).json({ error: error.response.data.message });
    }else{
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  }
});

// Start the server
app.listen(port, () => {
  console.log(`API Gateway is running on port ${port}`);
});
