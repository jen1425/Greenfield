var router = require('express').Router();
var controller = require('../controllers/controllers');

router.get('/tracks', controller.tracks.get);

router.get('', controller.tracks.get);

router.get('/filter', controller.filter.get);

module.exports = router;