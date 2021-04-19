const express = require('express');
const router = express.Router();
const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');


router.post('/', TaskValidation, TaskController.create);
router.put('/:id', TaskValidation, TaskController.update);
router.get('/:id', TaskController.show);
router.delete('/:id', TaskController.delete);
router.put('/:id/:done', TaskController.done);

router.get('/filter/all/:userid',   TaskController.all);
router.get('/filter/late/:userid',  TaskController.late);
router.get('/filter/today/:userid', TaskController.today);
router.get('/filter/week/:userid',  TaskController.week);
router.get('/filter/month/:userid', TaskController.month);
router.get('/filter/year/:userid',  TaskController.year);

module.exports = router;