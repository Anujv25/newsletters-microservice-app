const Subscriber=require('../models/Subscriber');
const {sendWelcomeEmail}=require('../services/emailService');




// Create a new subscriber

const subscribeUser=async (req,res)=>{
    const {email}=req.body;
    console.log("--->>",email)


   // Validate email
  if (!email || !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
    return res.status(400).json({ message: 'Invalid email address!' });
  }

  try {
        
        const existingSubscriber=await Subscriber.findOne({email});
        if(existingSubscriber){
            return res.status(400).json({message:'Email already subscribed!'});
        }

        // Create a new subscriber
        const newSubscriber = new Subscriber({ email });
        await newSubscriber.save();

        
    // Step 1: Call the email service to send the welcome email
    const emailResponse = await sendWelcomeEmail(email);

    // Step 2: Check if the email was successfully sent
    if (emailResponse.success) {
      return res.status(201).json({ message: 'Subscription successful! Welcome email sent.' });
    } else {
      return res.status(500).json({ message: 'Subscription successful, but failed to send welcome email.' });
    }
      
  }
  catch(error){
    console.error(error);
    res.status(500).json({ message: 'Something went wrong!' });
  }

}

const getSubscribers = async (req, res) => { 
    try {
      const subscribers = await Subscriber.find();
      res.status(200).json(subscribers);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
}

module.exports={subscribeUser,getSubscribers};