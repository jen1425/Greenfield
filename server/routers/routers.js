var router = require('express').Router();
var controller = require('../controllers/controllers');
var filtersController = require('../controllers/filtersController');

router.get('/filter', controller.filter.get);

router.get('/followings', filtersController.followings.get);

module.exports = router;