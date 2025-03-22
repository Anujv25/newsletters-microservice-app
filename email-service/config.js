require('dotenv').config();

module.exports = {
  emailProvider: {
   // or use 'smtp' for SMTP
    apiKey: process.env.SENDGRID_API_KEY,  // For SendGrid or use SMTP credentials
    fromEmail: process.env.FROM_EMAIL || 'anuj.vgithub25@gmail.com',
  },
};
