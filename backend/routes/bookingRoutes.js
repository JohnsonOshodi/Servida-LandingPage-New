const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController"); // Import the controller

// Use the controller for handling booking requests
router.post("/book-cleaning", bookingController.submitBooking);

module.exports = router;

