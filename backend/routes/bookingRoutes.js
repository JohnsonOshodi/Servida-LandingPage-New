const express = require("express");
const Form = require("../models/form"); 
const router = express.Router();

// POST: Create a new booking
router.post("/create", async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      selectedTier,
      frequency,
      rooms,
      extraStaff,
      hasRunningWater,
      totalPrice,
      hasDependents,
      hasCleaningEquipment,
      contactPreference,
    } = req.body;

    // Create a new booking
    const newBooking = new Form({
      name,
      phone,
      email,
      selectedTier,
      frequency,
      rooms,
      extraStaff,
      hasRunningWater,
      totalPrice,
      hasDependents,
      hasCleaningEquipment,
      contactPreference,
    });

    await newBooking.save();
    res.status(201).json({ success: true, message: "Booking created successfully", newBooking });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
