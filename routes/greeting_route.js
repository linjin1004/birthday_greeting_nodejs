const express = require('express');
const router = express.Router();

const greetingController = require('../controllers/greeting_controller');

router.get('/version1', greetingController.simpleMessage);


module.exports = router;