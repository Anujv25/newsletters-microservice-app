const nodemailer = require('nodemailer');
const { emailProvider } = require('../config');

// Setup for SendGrid using Nodemailer Transporter (you can replace this for SMTP if needed)

const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: 'apikey', // Always 'apikey' for SendGrid
    pass: emailProvider.apiKey,  // For SendGrid
  },
});

const sendEmail = async (to, subject, text, html) => {
  try {
    const info = await transporter.sendMail({
      from: emailProvider.fromEmail,
      to: to,  // Recipients
      subject: subject,
      text: text,  // Plain text body
      html: html,  // HTML body
    });

    console.log('Email sent: ' + info.response);
    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Error sending email: ', error);
    return { success: false, message: 'Failed to send email', error };
  }
};

module.exports = { sendEmail };
