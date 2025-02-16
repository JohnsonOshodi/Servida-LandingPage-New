const express = require("express");
const router = express.Router();
const { getHomePage } = require("../controllers/pageController");

// Route to serve the landing page
router.get("/", getHomePage);

module.exports = router;
