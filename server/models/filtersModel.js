const axios = require('axios');
const db = require('../../database-mysql/index');
const request = require('request');

exports.getFollowings = function(callback) {
  axios.get('https://api.soundcloud.com/users/7742327/followings', {
    params: {
      client_id: process.env.SC_CLIENT_ID,
      page_size: '500'
    },
    withCredentials: true
  }).then(function(response) {
    callback(null, response.data);
  }).catch(function(error) {
    console.log(error);
    callback(error, null);
  });
};

exports.postFilter = function(data, callback) {
  if (data.newFilterFollowings.length > 0) {
    var filterFollowings = [];
    data.newFilterFollowings.forEach(function(followingId) {
      let id = Object.keys(followingId);
      filterFollowings.push(id[0]);
    });
  }
  //currently the only user is 2
  let userId = 2;
  db.postFilter(userId, data.newFilterName, function(error, data) {
    if (error) {
      console.log('error in filtersModel postFilter', error);
      callback(error, null);
    } else {
      console.log('data for postFilter in filtersModel', data);
      if (filterFollowings) {
        filterFollowings.forEach(function(followingId) {
          db.postFilterAttributes(data, 'following', followingId, function(error, result) {
            if (error) {
              console.log('error in filtersModel postFilterAttributes', error);
            } else {
              console.log('result in filtersModel postFilterAttributes', result);
            }
          });
        }); 
      }
    }
    callback(null, 'Success!');
  });
};

exports.getAllUserFilters = function(callback) {
  let userId = 2;

  db.getAllUserFilters(userId, function(error, results) {
    if (error) {
      console.log('error in filtersModel for getAllUserFilters', error);
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

exports.getFilterAttributes = function(filterId, callback) {
  db.getFilterAttributes(filterId, function(error, results) {
    if (error) {
      console.log('error in filtersModel for getFilterAttributes', error);
      callback(error, null);
    } else {
      var filterArray = JSON.parse(JSON.stringify(results));
      var followingString = '(';
      for (var i = 0; i < filterArray.length; i++) {
        //check type of filterArray[i] 
        if (filterArray[i].type === 'following') {
          var value = parseInt(filterArray[i].value);
          followingString += 'collection[i].origin.user["id"] === ' + value + ' ||';
        }
      }

      followingString = followingString.substring(0, followingString.length - 2);
      followingString += ')';
      console.log('followingString --->', followingString);

      var feedOptions = {
        url: 'https://api.soundcloud.com/me/activities/tracks/affiliated',
        method: 'GET',
        qs: {oauth_token: '1-277366-7742327-c7e7cb45fe4ff41', limit: 500, order: '-created_at'}
      };

      request(feedOptions, function(error, response, body) {
        if (error) { console.log('error getting feed ', error); }        
        else {
          // console.log(JSON.parse(body).collection);
          var collection = JSON.parse(body).collection;
          var returnCollection = [];

          for (var i = 0; i < collection.length; i++) {
            if (!collection[i].origin) { continue; }
            var result = eval(followingString);
            if (result) {
              returnCollection.push(collection[i]);
            }
          }

          console.log('ret coll length ', returnCollection.length);
          callback(null, JSON.stringify(returnCollection));
        }
      });

      // callback(null, results);
    }
  });
};
