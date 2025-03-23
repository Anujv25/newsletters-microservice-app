
const { sendEmail } = require('../services/emailService');

const sendWelcomeEmail = async (req, res) => { 
    const { email } = req.body;

    const response=await sendEmail(email, 'Welcome!', 'Welcome to our platform!');
    if(response.success){
        res.status(200).json({message:'Welcome email sent successfully'});
    }
    else{
        res.status(500).json({message:'Failed to send welcome email'});
    }



}


module.exports={sendWelcomeEmail};