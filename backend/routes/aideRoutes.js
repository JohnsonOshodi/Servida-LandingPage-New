
const express = require('express');
const router = express.Router();
const { signupAide, getAllAides, updateAide, deleteAide } = require('../controllers/aideController');
const { validateAideSignup } = require('../middleware/aideMiddleware');

// Signup Route
router.post('/signup', validateAideSignup, signupAide);

// Get All Aides
router.get('/', getAllAides);

// Update Aide
router.put('/:id', updateAide);

// Delete Aide
router.delete('/:id', deleteAide);

module.exports = router;
