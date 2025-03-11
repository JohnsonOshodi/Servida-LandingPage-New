const express = require('express');
const Booking = require('../models/booking');
const router = express.Router();

// POST: Create a new booking
router.post('/create', async (req, res) => {
  try {
    const {
      selectedTier,
      frequency,
      rooms,
      extraStaff,
      hasRunningWater,
      totalPrice,
    } = req.body;

    const newBooking = new Booking({
      selectedTier,
      frequency,
      rooms,
      extraStaff,
      hasRunningWater,
      totalPrice,
    });

    await newBooking.save();
    res.status(201).json({ message: 'Booking created successfully', newBooking });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Failed to create booking' });
  }
});

// GET: Fetch all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

module.exports = router;
