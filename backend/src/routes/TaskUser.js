const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');

router.post('/', UserController.create);
router.put('/:id', UserController.update);
router.get('/:id', UserController.show);
router.delete('/:id', UserController.delete);


router.get('/search/all', UserController.all);

module.exports = router;