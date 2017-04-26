var router = require('express').Router();
var controller = require('../controllers');

router.get('/', controller.tracks.get);

router.get('', controller.tracks.get);

module.exports = router;