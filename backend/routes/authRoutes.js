const express = require('express');
const router = express.Router();
const { register, login, adminLogin } = require('../controllers/authController');
const { protect, isAdmin } = require('../middleware/authMiddleware');

// User Registration
router.post('/register', register);

// User Login
router.post('/login', login);

// Admin Login
router.post('/admin-login', adminLogin);

module.exports = router;
