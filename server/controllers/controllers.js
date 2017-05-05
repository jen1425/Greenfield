var model = require('../models/models');
var url = require('url');

module.exports = {
  tracks: {
    get: function(req, res) {
      var queryParams = url.parse(req.url, true).query;
      console.log('got to the controller for tracks with query params ', queryParams.genres);
      model.tracks.get(queryParams.genres, function(err, tracks) {
        if (err) {
          res.status(404)
          .append('Access-Control-Allow-Origin', '*')
          .send('Failed with err ' + err);
        } else {
          //console.log('tracks that the controller will send back '+JSON.stringify(tracks));
          //console.log(tracks);
          //console.log('Data the controller will send back ', tracks);
          res.status(200)
          .append('Access-Control-Allow-Origin', '*')
          .send(tracks);
        }
      });
    }
  },

  filter: {
    get: function(req, res) {
      console.log('got to filter controller');
      var genreQS = '';
      var usernameQS = '';
      var durationQS = '';
      var finalQS = '';
      var qs = url.parse(req.url, true).query;

      console.log('genre ', qs.genre);
      console.log('username ', qs.username);
      console.log('duration ', qs.duration);

      if (qs.duration) {
        durationQS += '(collection[i]["duration"] >= ' + qs.duration + ')';
      }

      if (qs.username) {
        usernameQS += '(collection[i].user["username"] === ' + qs.username + ')';
        //change this to have an or for multiple artists if needed 
      }

      if (qs.genre) {
        genreQS += '(';
        var genreArray = qs.genre.split(',');
        genreArray.forEach(function(genre){
          genreQS += 'collection[i]["genre"] === ' + genre + '||';
        });
        genreQS = genreQS.substring(0, genreQS.length - 2);
        genreQS += ')';
      }

      finalQS = 'if(';

      if (genreQS !== '') {
        finalQS += genreQS + '&&';
      }

      if (usernameQS !== '') {
        finalQS += usernameQS + '&&';
      }

      if (durationQS !== '') {
        finalQS += durationQS;
      }

      finalQS += ')';

      console.log('finalQS is --->', finalQS);


      //parse the query string and send to the model 
      //wait for response from model to send to the client
      //for now, sending in empty query string 
      // model.filter.get(function(error, data){
      //   if (error) {
      //     console.log('controller got error from DB', error);
      //     res.status(404)
      //     .append('Access-Control-Allow-Origin', '*')
      //     .send(error); 
      //   } else {
      //     res.status(200)
      //     .append('Access-Control-Allow-Origin', '*')
      //     .send(data);
      //   }
      // });  
    }
      
  }
};

