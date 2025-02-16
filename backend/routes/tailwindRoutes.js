const express = require("express");
const router = express.Router();
const { getTailwindConfig, getTailwindCSS } = require("../controllers/tailwindController");


router.get("/config", getTailwindConfig);


router.get("/css", getTailwindCSS);

module.exports = router;
