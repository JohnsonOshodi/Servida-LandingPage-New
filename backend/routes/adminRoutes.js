const express = require('express');
const { createAdmin, loginAdmin, getAdmins } = require('../controllers/adminController');
const { authenticateAdmin } = require('../middleware/adminMiddleware');

const router = express.Router();

router.post('/create', authenticateAdmin, createAdmin); // Only authenticated admins can create other admins
router.post('/login', loginAdmin); // Public route for admin login
router.get('/list', authenticateAdmin, getAdmins); // Only authenticated admins can view the list of admins

module.exports = router;
