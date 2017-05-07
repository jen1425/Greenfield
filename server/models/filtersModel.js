const request = require('request');
const axios = require('axios');

module.exports = {
  followings: {
    get: function(callback) {
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
    }
  }
};
