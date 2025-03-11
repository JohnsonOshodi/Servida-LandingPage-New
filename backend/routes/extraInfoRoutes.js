const express = require("express");
const { submitExtraInfo } = require("../controllers/formController");

const router = express.Router();

router.post("/", submitExtraInfo);

module.exports = router;
