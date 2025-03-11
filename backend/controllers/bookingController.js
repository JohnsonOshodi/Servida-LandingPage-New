const Booking = require('../models/booking');

// Create a new booking
exports.createBooking = async (req, res) => {
  try {
    const { selectedTier, frequency, rooms, extraStaff, hasRunningWater, totalPrice } = req.body;

    // Validate required fields
    if (!selectedTier || !frequency || !rooms || totalPrice == null) {
      return res.status(400).json({ error: 'Selected tier, frequency, rooms, and total price are required.' });
    }

    const newBooking = new Booking({
      selectedTier,
      frequency,
      rooms,
      extraStaff: extraStaff || 0, // Default to 0 if not provided
      hasRunningWater: hasRunningWater ?? true, // Default to true if not provided
      totalPrice,
    });

    await newBooking.save();
    res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Failed to create booking', details: error.message });
  }
};

// Get all bookings
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json({ message: 'Bookings retrieved successfully', bookings });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ error: 'Failed to fetch bookings', details: error.message });
  }
};
