const express = require('express');
const router = express.Router();
const dataController = require('../controllers/getId.controller')

router.route('/:id')
    .get(dataController.getUserIds)


module.exports = router;