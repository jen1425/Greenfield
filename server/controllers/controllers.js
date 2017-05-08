var model = require('../models/models');
var url = require('url');

module.exports = {
  filter: {
    get: function(req, res) {
      //this method will extract the different filter options gotten from the 
      //client and pass them on to the model as an if statement string expression, which
      //the model can 'eval' 

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
        durationQS += '(collection[i].origin["duration"] >= ' + qs.duration + ')';
      }

      if (qs.username) {
        usernameQS += '(collection[i].origin.user["username"] === "' + qs.username + '")';
        //change this to have an or for multiple artists if needed 
      }

      if (qs.genre) {
        genreQS += '(';
        var genreArray = qs.genre.split(',');
        genreArray.forEach(function(genre){
          genreQS += 'collection[i].origin["genre"] === "' + genre + '"||';
        });
        genreQS = genreQS.substring(0, genreQS.length - 2);
        genreQS += ')';
      }

      if (genreQS !== '' || usernameQS !== '' || durationQS !== '') {
        finalQS += '(';
      }
      

      if (genreQS !== '') {
        finalQS += genreQS;
        if(usernameQS !== '' || durationQS !== '') finalQS += '&&';
      }

      if (usernameQS !== '') {
        finalQS += usernameQS;
        if(durationQS !== '') finalQS += '&&';
      }

      if (durationQS !== '') {
        finalQS += durationQS;
      }

      if (genreQS !== '' || usernameQS !== '' || durationQS !== '') {
        finalQS += ')';
      }
      //see the final query string that will be passed to the model 
      console.log('finalQS is --->', finalQS);

      //call model with the querystring and wait for an async response of the filtered feed
      model.filter.get(finalQS, function(error, data) {
        if (error) {
          console.log('controller got error from DB', error);
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

//added test comment for coveralls testing