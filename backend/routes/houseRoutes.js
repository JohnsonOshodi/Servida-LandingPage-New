const express = require("express");
const router = express.Router();
const { addHouseDescription } = require("../controllers/houseController");

// POST route for adding house description
router.post("/add", addHouseDescription);

module.exports = router;
