const express = require('express');
const router = express.Router();
const { signupUser , loginUser } = require('../controllers/authController')

// Signup route
router.post('/signup',signupUser);

// Login route
router.post('/login',loginUser);

router.options('/login', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://init-frontend.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.sendStatus(200);
});


module.exports = router;
