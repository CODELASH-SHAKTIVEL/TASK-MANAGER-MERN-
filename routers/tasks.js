const express = require('express');
const router = express.Router();
const { getAlltasks, createtasks, gettasks, updatetasks, deletetasks } = require('../controllers/tasks');

router.route('/').get(getAlltasks).post(createtasks)
router.route('/:id').get(gettasks).patch(updatetasks).delete(deletetasks)

module.exports = router;