const express = require('express');
const router = express.Router();

const dataController = require('../controllers/updateDatas.controller')


router.route('/:id')
    .patch(dataController.updateDatas)


module.exports = router