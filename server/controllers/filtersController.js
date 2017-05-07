const model = require('../models/filtersModel');

module.exports = {
  followings: {
    get: function(req, res) {
      model.followings.get(function(error, data) {
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
    }
  }
};
