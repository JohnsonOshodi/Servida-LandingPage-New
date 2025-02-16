const express = require('express');
const {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  approveAide,
} = require('../controllers/userController');
const { protect, isAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

// Public Routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected Routes
router.use(protect); // Protect all routes below this middleware
router.get('/', isAdmin, getAllUsers);
router.get('/:userId', isAdmin, getUserById);
router.put('/:userId', updateUser);
router.delete('/:userId', isAdmin, deleteUser);
router.put('/:userId/approve', isAdmin, approveAide);

module.exports = router;
