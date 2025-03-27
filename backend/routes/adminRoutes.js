const express = require('express');
const { createAdmin, loginAdmin, getAdmins } = require('../controllers/adminController');
const { authenticateAdmin } = require('../middleware/adminMiddleware');

const router = express.Router();

// Route to create a new admin (protected)
router.post('/', authenticateAdmin, createAdmin);

// Route for admin login
router.post('/login', loginAdmin);

// Route to get a list of admins (protected)
router.get('/', authenticateAdmin, getAdmins);

module.exports = router;
