
const express = require('express');
const router = express.Router();
const { sendWelcomeEmail}=require('../controllers/emailController');


// Route to subscribe a user
router.post('/sendWelcomeEmail', sendWelcomeEmail);
router.get('/', (req, res) => {
    res.send('Hello World')
})


module.exports = router;