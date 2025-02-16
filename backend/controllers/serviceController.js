const Service = require('../models/service');

// Get all services
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching services', details: err.message });
  }
};

// Create a new service
exports.createService = async (req, res) => {
  const { title, description, bgColor, hoverBgColor, buttonColor } = req.body;

  try {
    const newService = new Service({ title, description, bgColor, hoverBgColor, buttonColor });
    await newService.save();
    res.status(201).json({ message: 'Service created successfully', service: newService });
  } catch (err) {
    res.status(500).json({ error: 'Error creating service', details: err.message });
  }
};
