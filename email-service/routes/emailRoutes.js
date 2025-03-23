
const express = require('express');
const router = express.Router();
const { sendWelcomeEmail}=require('../controllers/emailController');


// Route to subscribe a user
router.post('/sendWelcomeEmail', sendWelcomeEmail);




module.exports = router;