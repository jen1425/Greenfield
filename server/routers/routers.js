var router = require('express').Router();
var controller = require('../controllers/controllers');

router.get('/filter', controller.filter.get);

module.exports = router;