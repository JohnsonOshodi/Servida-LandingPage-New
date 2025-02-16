const express = require("express");
const router = express.Router();
const { getComponentConfig, updateComponentConfig } = require("../controllers/componentController");


router.get("/", getComponentConfig);


router.put("/", updateComponentConfig);

module.exports = router;
