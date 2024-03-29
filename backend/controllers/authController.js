// authController.js

const UserModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

// Register user
exports.signupUser = async (req, res) => {
  try {
    // Check if user already exists
    const existingUser = await UserModel.findOne({ rollNumber: req.body.rollNumber });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    
    // Create new user
    const newUser = new UserModel(req.body);
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Login user
exports.loginUser = async (req, res) => {
  try {
    const { rollNumber, password } = req.body;
    
    if (rollNumber === '5091' && password === 'user5091') {
      // Create and send JWT token for admin
      const token = jwt.sign({ role: 'admin' }, 'secret', { expiresIn: '1h' });
      return res.json({ token });
    }
    // Check if user exists
    const user = await UserModel.findOne({ rollNumber });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    
    // Check password
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create and send JWT token
    const token = jwt.sign({ userId: user._id }, 'secret', { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
