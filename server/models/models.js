var request = require('request');
var key = require('../APIkey.js').key;
var axios = require('axios');

module.exports = {

  tracks: {

    get: function(searchTerms, callback) {
      //This function is invoked when the user makes a GET request for /tracks with specified searchTerms
      //It will get the above tracks, then for each subsequent track, it will make a call to get the iframe
      //for the track. It will then compose an array of all iframes and return it to the controller
      console.log(key);
      // searchTerms = 'Pop';
      // var options = {
      //   url: 'http://api.soundcloud.com/tracks/?client_id=' + key,
      //   method: 'GET',
      //   // qs: {'genres': searchTerms}
      // };

      // request(options, function(error, response, body) {
      //   if (!error) {
      //     console.log('retrieved tracks within the model');
      //   }
      //   var JSONbod = JSON.parse(body);
      //   var iframeArray = [];
      //   var size = Math.min(JSONbod.length, 15);
      //   console.log('total tracks received ',JSONbod.length);
      //   for (var i = 0; i < size; i++) {
      //     var trackURL = JSONbod[i]['permalink_url'];
      //     console.log('URL for which trying to get iframe ' + trackURL);
      //     var options = { url: 'http://soundcloud.com/oembed', 
      //       method: 'GET', 
      //       qs: {'url': trackURL, 'format': 'json', 'maxheight': '166', 'maxwidth': '600'}
      //     };
      //     request(options, function(error, response, body) {

      //       var JSONitem = JSON.parse(body);
      //       iframeArray.push(JSONitem.html);
      //       console.log('iframe received ' + JSONitem.html.toString());

      //       if (iframeArray.length === size) { //send back 15 items
      //         callback(null, iframeArray);
      //       }
      //     });
      //   }
      //   //convert body via JSON parse
      //   //iterate over every entry and get it's url 
      //   //for the url in question, make an API call to get iframe and add it to a results array
      //   //return results array
      // }); 

      axios.get('http://api.soundcloud.com/tracks/?client_id=' + key)
      .then(function(tracks){
        callback(null, tracks['data']);
      })
      .catch(function(error){
        callback(error, null);
      });

    }
  }

};