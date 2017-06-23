const model = require('../models/filtersModel');

exports.getFollowings = function(req, res) {
  model.getFollowings(function(error, data) {
    if (error) {
      console.log('filters controller got error from DB', error);
      res.status(404)
      .append('Access-Control-Allow-Origin', '*')
      .send(error); 
    } else {
      res.status(200)
      .append('Access-Control-Allow-Origin', '*')
      .send(data);
    }
  });
};

exports.postFilter = function(req, res) {
  model.postFilter(req.body, function(error, data) {
    if (error) {
      console.log('filtersController postFilter error', error);
    } else {
      console.log('filtersController postFilter data', data);

      res.send(JSON.stringify(data));
      res.end();
    }
  });
};

exports.getAllUserFilters = function(req, res) {
  model.getAllUserFilters(function(error, data) {
    if (error) {
      res.status(404).send(error);
    } else {
      res.send(data);
    }
  });
};

exports.getFilterAttributes = function(req, res) {
  model.getFilterAttributes(req.query.id, function(error, data) {
    if (error) {
      res.status(404).send(error);
    } else {
      res.send(data);
    }
  });
};

