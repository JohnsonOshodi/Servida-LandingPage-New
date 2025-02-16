const express = require('express');
const { getLandingPageData } = require('../controllers/landingPageController');

const router = express.Router();


router.get('/', getLandingPageData);

module.exports = router;
