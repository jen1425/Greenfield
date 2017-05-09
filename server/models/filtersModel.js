const axios = require('axios');
const db = require('../../database-mysql/index');

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
      callback(null, results);
    }
  });
};
