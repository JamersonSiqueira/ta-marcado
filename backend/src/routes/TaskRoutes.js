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

router.get('/filter/countdone/:userid',   TaskController.countDone);
router.get('/filter/countundone/:userid',   TaskController.countUndone);
router.get('/teste/:userid/:type', TaskController.countByType);
router.get('/dashresults/:userid/:type', TaskController.countByTypeAndWeek);

module.exports = router;