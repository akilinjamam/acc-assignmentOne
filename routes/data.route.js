const express = require('express');
const router = express.Router();
const dataController = require('../controllers/data.controller')




router.route('/').get(dataController.getAllUsers)

// router.route('/').post(dataController.savePosts)

// router.route('/:id')
//     .delete(dataController.deleteData)



module.exports = router
