const cron = require('node-cron');
const axios = require('axios');
const { sendEmail } = require('./emailService');
// Cron job to send weekly updates every Monday at 9 AM
cron.schedule('0 9 * * 1', async () => {
  console.log('Sending weekly updates to all subscribers...');

  try {
   
    // Fetch all subscribers from the database
    const response = await axios.get('http://localhost:5001/api/subscription/subscribers');
    const subscribers = response.data;
    if (!subscribers.length) {
      console.log('No subscribers found.');
    }

    console.log(`${subscribers.length} subscribers found.`);

    // Loop through all subscribers and send them the weekly update
    for (const subscriber of subscribers) {
      const email = subscriber.email;
      
      // Call the email service to send the weekly update email
      const emailResponse = await sendEmail(email,"Weekly Update","This is your weekly update!");

      if (!emailResponse.success) {
        console.error(`Failed to send weekly update to ${email}`);
      } else {
        console.log(`Weekly update sent to ${email}`);
      }
    }
  } catch (error) {
    console.error('Error sending weekly updates:', error);
  }
});

console.log('Weekly update scheduler is set up.');
