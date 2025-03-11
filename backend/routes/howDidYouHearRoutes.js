const express = require("express");
const router = express.Router();
const { saveResponse, getResponses } = require("../controllers/howDidYouHearController");

// POST: Save user response
router.post("/", saveResponse);

// GET: Retrieve all responses
router.get("/", getResponses);

module.exports = router;
