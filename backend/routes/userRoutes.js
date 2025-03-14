const express = require("express");
const userController = require("../controllers/userController"); 

const { 
  registerUser, 
  loginUser, 
  getAllUsers, 
  getUserById, 
  updateUser, 
  deleteUser, 
  approveAide 
} = userController;

const { protect, authorizeRole } = require("../middleware/authMiddleware");

const router = express.Router();

// Public Routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected Routes (Require Authentication)
router.get("/users", protect, authorizeRole(["admin"]), getAllUsers);
router.get("/users/:userId", protect, getUserById);
router.put("/users/:userId", protect, updateUser);
router.delete("/users/:userId", protect, authorizeRole(["admin"]), deleteUser);
router.patch("/approve-aide/:userId", protect, authorizeRole(["admin"]), approveAide);

module.exports = router;


