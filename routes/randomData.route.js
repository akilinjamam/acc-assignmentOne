const express = require('express');
const router = express.Router();
const randomDataController = require('../controllers/randomData.controller')


router.route('/').get(randomDataController.getRandomData);


module.exports = router