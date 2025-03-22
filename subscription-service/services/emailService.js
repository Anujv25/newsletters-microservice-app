const axios = require('axios');
const { emailServiceUrl } = require('../config');  // Import your email service URL from config

// Function to send the welcome email after successful subscription
const sendWelcomeEmail = async (email) => {
  try {
    // Make the POST request to the email service
    const response = await axios.post(emailServiceUrl, { email });

    // Check if the response status is OK
    if (response.status === 200) {
      return { success: true, message: 'Welcome email sent successfully' };
    } else {
      return { success: false, message: 'Failed to send welcome email' };
    }
  } catch (error) {
    // Log the error if something goes wrong with the email service call
    console.error('Error while sending welcome email:', error);
    return { success: false, message: 'Error sending welcome email' };
  }
};

module.exports = { sendWelcomeEmail };
