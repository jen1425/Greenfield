var request = require('request');
var key = process.env.SC_CLIENT_ID;
var secret = process.env.SC_CLIENT_SECRET;
var username = process.env.USERNAME;
var password = process.env.PASSWORD;
var axios = require('axios');
var request = require('request');

module.exports = {

  filter: {
    /* this method does the following  - 

    1) Calls into the SC API and gets a token for a user.
    Currently for a single user till we figure out OAuth.
    2) Makes a call with the token to get the user's feed
    3) If a non-empty query string has been passed to the
    method, it will apply the filter to the results and send back a filtered set back to 
    the controller
    
    */
    get: function(queryString, callback) {
      console.log('got to model for filter');
      var userOptions = {
        url: 'https://api.soundcloud.com/oauth2/token',
        method: 'POST',
        qs: {grant_type: 'password',
          client_id: key,
          client_secret: secret,
          username: username,
          password: password,
          scope: 'non-expiring'
        }
      };

      request(userOptions, function(error, res, body) {
        if (error) {
          console.log('model got an error from SC trying to get user token', error);
          callback(error, null);
        } else {
          var token = JSON.parse(body).access_token;
          
          var feedOptions = {
            url: 'https://api.soundcloud.com/me/activities/tracks/affiliated',
            method: 'GET',
            qs: {oauth_token: token, limit: 500, order: '-created_at'}
          };

          request(feedOptions, function(error, res, body) {
            if (error) {
              console.log('model got an error trying to get feed from SC', error);
              callback(error, null);
            } else {
              console.log('got collection back of length ', JSON.parse(body).collection.length);
              var returnCollection = [];
              var collection = JSON.parse(body).collection;
              //console.log(collection[0]);
              if (queryString === '') {
                var filtered = [];
                for(var j = 0; j < 20; j++) {
                  if(!collection[j].origin) continue;
                  else filtered.push(collection[j]);
                }
                callback(null, JSON.stringify(filtered));
              } else {
                console.log(queryString);
                for (var i = 0; i < collection.length; i++) {
                  if (!collection[i].origin) { continue; }
                  var result = eval(queryString);
                  if (result) {
                    returnCollection.push(collection[i]);
                  }
                }

                console.log('return collection length', returnCollection.length);
                callback(null, JSON.stringify(returnCollection));
              }
            }
          });
        }
      });

      
    }
  }

};