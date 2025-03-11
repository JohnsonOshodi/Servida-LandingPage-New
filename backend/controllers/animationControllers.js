const Animation = require('../models/animationModels');

// Get all animations
exports.getAllAnimations = async (req, res, next) => {
  try {
    const animations = await Animation.find();
    res.status(200).json({
      message: 'Animations retrieved successfully',
      count: animations.length,
      animations,
    });
  } catch (error) {
    console.error('Error fetching animations:', error);
    next(error);
  }
};

// Get animation by device type
exports.getAnimationByDevice = async (req, res, next) => {
  try {
    const { deviceType } = req.params;
    const animation = await Animation.findOne({ deviceType });

    if (!animation) {
      return res.status(404).json({ error: 'Animation not found' });
    }

    res.status(200).json(animation);
  } catch (error) {
    console.error('Error fetching animation:', error);
    next(error);
  }
};

// Add a new animation
exports.addAnimation = async (req, res, next) => {
  try {
    const { deviceType, assetPath, animationEffect } = req.body;

    // Validate required fields
    if (!deviceType || !assetPath || !animationEffect) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const newAnimation = new Animation({ deviceType, assetPath, animationEffect });
    await newAnimation.save();

    res.status(201).json({
      message: 'Animation added successfully',
      animation: newAnimation,
    });
  } catch (error) {
    console.error('Error adding animation:', error);
    next(error);
  }
};
