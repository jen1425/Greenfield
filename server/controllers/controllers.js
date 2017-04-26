var model = require('../models');

module.exports = {
  tracks: {
    get: function(req, res) {
      model.tracks.get('', function(err, tracks) {
        if (err) {
          res.status(404)
          .append('Access-Control-Allow-Origin', '*')
          .send('Failed with err ' + err);
        } else {
          res.status(200)
          .append('Access-Control-Allow-Origin', '*')
          .send(JSON.stringify(tracks));
        }
      });
    }
  }
};

