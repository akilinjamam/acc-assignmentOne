const express = require('express');
const router = express.Router();

const dataController = require('../controllers/deleteData.controller')

router.route('/:id')
    .delete(dataController.deleteData)
    .get(dataController.getAllData)


module.exports = router