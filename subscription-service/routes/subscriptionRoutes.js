const { subscribeUser } = require("../controllers/subscriptionController");


const express = require('express');
const router = express.Router();



// Route to subscribe a user
router.post('/subscribe', subscribeUser);
router.get('/', (req, res) => {
    res.send('Hello World')
})


module.exports = router;