var router = require('express').Router();
var controller = require('../controllers/controllers');

router.get('/tracks', controller.tracks.get);

router.get('', controller.tracks.get);

module.exports = router;