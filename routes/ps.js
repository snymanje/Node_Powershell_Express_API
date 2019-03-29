const express = require('express');
const router = express.Router();
const PSController = require('../controllers/ps');

// / => GET
router.get('/', PSController.getPSData);

module.exports = router;