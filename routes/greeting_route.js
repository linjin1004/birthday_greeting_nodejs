const express = require('express');
const router = express.Router();

const greetingController = require('../controllers/greeting_controller');

router.get('/version_1/simple_message', greetingController.simpleMessage); 
router.get('/version_2/message_for_different_gender', greetingController.messageForDifferentGender);


module.exports = router;