const express = require("express");
const router = express.Router();
const { submitPersonalInfo } = require("../controllers/personalInfoController");

router.post("/", submitPersonalInfo);

module.exports = router;
