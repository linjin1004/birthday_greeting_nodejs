const express = require('express');
const router = express.Router();

const greetingController = require('../controllers/greeting_controller');

router.get('/version_1/simple_message', greetingController.simpleMessage); 
router.get('/version_2/message_for_different_gender', greetingController.messageForDifferentGender);
router.get('/version_3/message_with_elder_pic', greetingController.messageWithElderPic);
router.get('/version_4/message_with_full_name', greetingController.messageWithFullName);


module.exports = router;