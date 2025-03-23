const { subscribeUser,getSubscribers } = require("../controllers/subscriptionController");


const express = require('express');
const router = express.Router();



// Route to subscribe a user
router.post('/subscribe', subscribeUser);
router.get('/subscribers', getSubscribers);


module.exports = router;