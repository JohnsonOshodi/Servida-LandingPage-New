const express = require('express');
const { getAllAnimations, getAnimationByDevice, addAnimation } = require('../controllers/animationControllers');

const router = express.Router();

// Routes
router.get('/', getAllAnimations); // GET all animations
router.get('/:deviceType', getAnimationByDevice); // GET animation by device type
router.post('/', addAnimation); // POST a new animation

module.exports = router;
