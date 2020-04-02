const express = require('express');
const router = express.Router();
const chatController = require('../Controllers/chatController')

router.get('/test', chatController.serverTest)


module.exports = router;