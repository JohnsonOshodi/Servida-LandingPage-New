const Animation = require('../models/animationModels');

// Get all animations
exports.getAllAnimations = async (req, res, next) => {
  try {
    // Fetch all animations from the database
    const animations = await Animation.find();
    // Respond with a 200 status and all animations in JSON format
    res.status(200).json(animations);
  } catch (error) {
    // If an error occurs, pass it to the error handler middleware
    next(error);
  }
};

// Get animation by device type
exports.getAnimationByDevice = async (req, res, next) => {
  try {
    // Extract the deviceType from the route parameter
    const { deviceType } = req.params;

    // Fetch the animation for the specific deviceType
    const animation = await Animation.findOne({ deviceType });

    // If no animation is found for the given deviceType, return a 404 status
    if (!animation) {
      return res.status(404).json({ error: 'Animation not found' });
    }

    // Respond with a 200 status and the found animation
    res.status(200).json(animation);
  } catch (error) {
    // If an error occurs, pass it to the error handler middleware
    next(error);
  }
};

// Add a new animation
exports.addAnimation = async (req, res, next) => {
  try {
    // Extract necessary data from the request body
    const { deviceType, assetPath, animationEffect } = req.body;

    // Create a new animation document
    const newAnimation = new Animation({
      deviceType,
      assetPath,
      animationEffect
    });

    // Save the new animation to the database
    await newAnimation.save();

    // Respond with a 201 status and the new animation details
    res.status(201).json(newAnimation);
  } catch (error) {
    // If an error occurs, pass it to the error handler middleware
    next(error);
  }
};
