const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  approveAide,
} = require('../controllers/userController');
const { protect, isAdmin } = require('../middleware/authMiddleware');

// Get All Users (Admin)
router.get('/', protect, isAdmin, getAllUsers);

// Get User by ID (Admin)
router.get('/:userId', protect, isAdmin, getUserById);

// Update User Information (Admin & User)
router.put('/:userId', protect, updateUser);

// Delete User (Admin)
router.delete('/:userId', protect, isAdmin, deleteUser);

// Approve Aide Registration (Admin)
router.post('/approve-aide/:aideId', protect, isAdmin, approveAide);

module.exports = router;
