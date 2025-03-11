const express = require('express');
const router = express.Router();
const { 
  createOrder, 
  getOrders, 
  getOrderById, 
  updateOrder, 
  deleteOrder 
} = require('../controllers/orderController');
const { protect, isAdmin } = require('../middleware/authMiddleware');

// Create a new order (protected)
router.post('/create', protect, createOrder);

// Get all orders (protected and admin-only)
router.get('/', protect, isAdmin, getOrders);

// Get an order by ID (protected)
router.get('/:id', protect, getOrderById);

// Update an order (protected and admin-only)
router.put('/:id', protect, isAdmin, updateOrder);

// Delete an order (protected and admin-only)
router.delete('/:id', protect, isAdmin, deleteOrder);

module.exports = router;
