const express = require('express');
const router = express.Router();
const dataController = require('../controllers/savePost.controller')

router.route('/').post(dataController.savePosts)


module.exports = router