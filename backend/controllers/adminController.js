const Admin = require('../models/admin');
const jwt = require('jsonwebtoken');

const createAdmin = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ error: 'Admin with this email already exists.' });
    }

    // Create a new admin (password will be hashed in the model pre-save hook)
    const admin = new Admin({ firstName, lastName, email, password });
    await admin.save();

    res.status(201).json({ message: 'Admin created successfully.', adminId: admin._id });
  } catch (error) {
    console.error('Error creating admin:', error);
    res.status(500).json({ error: 'Internal server error. Please try again later.' });
  }
};

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });

    if (!admin || !(await admin.isPasswordValid(password))) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: admin._id, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRATION || '1d' }
    );

    res.status(200).json({
      message: 'Login successful.',
      token,
      admin: { id: admin._id, email: admin.email, role: admin.role },
    });
  } catch (error) {
    console.error('Error logging in admin:', error);
    res.status(500).json({ error: 'Internal server error. Please try again later.' });
  }
};

const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find().select('-password');

    res.status(200).json({
      message: 'Admins retrieved successfully.',
      count: admins.length,
      admins,
    });
  } catch (error) {
    console.error('Error retrieving admins:', error);
    res.status(500).json({ error: 'Internal server error. Please try again later.' });
  }
};

module.exports = { createAdmin, loginAdmin, getAdmins };
