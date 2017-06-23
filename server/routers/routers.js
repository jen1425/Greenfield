var router = require('express').Router();
var controller = require('../controllers/controllers');
var filtersController = require('../controllers/filtersController');

router.get('/filter', controller.filter.get);

router.get('/followings', filtersController.getFollowings);
router.post('/filters', filtersController.postFilter);
router.get('/filters', filtersController.getAllUserFilters);
router.get('/feed', filtersController.getFilterAttributes);

module.exports = router;