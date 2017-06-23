import React from 'react';
import TrackList from './TrackList.js';
import Controls from './Controls.js';
import Search from './Search.js';
import Nav from './Nav.js';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trackList: []
    };
  }

  componentDidMount() {
    let that = this;
    axios.get('/filter').then(function(response) {
      console.log('initial data from server -------------->');
      that.setState({trackList: response.data});
    }).catch(function(error) {
      console.log('error in app.js get filters');
    });
  }

  render () {

    var clickHandler = function(filterId) {
      var me = this;
      console.log('click handler for app');
      console.log('filter ID received ------>', filterId);
      axios.get('/feed', {
        params: {
          id: filterId
        }
      })
  .then(function (response) {
    console.log('YAY filtered feed');
    console.log(response.data[0].origin.user.username);
    me.setState({
      trackList: response.data
    }, function(){
      console.log('state was updated');
    });
  })
  .catch(function (error) {
    console.log(error);
  });
    };

    var searchTracks = function(duration, genre, username) {
      var searchTerm = '/filter?';
      if (duration !== '') {
        searchTerm += 'duration=' + duration;
      }

      if (genre !== '') {
        if (searchTerm !== '/filter?') {
          searchTerm += '&genre=' + genre;
        } else {
          searchTerm += 'genre=' + genre;
        }
      }

      if (username !== '') {
        if (searchTerm !== '/filter?') {
          searchTerm += '&username=' + username;
        } else {
          searchTerm += 'username=' + username;
        }
      }

      console.log('searchTerm sent by App component --> ', searchTerm);
      var me = this;
      if (searchTerm !== '/filter?') {
        $.get(searchTerm,
        function(data) {
          me.setState(
            {
              trackList: JSON.parse(data)
            }
          );
        });
      }
    };

    return (
      <div>
        <Nav />
        <div className="row">
          <div className="col-md-8">
            <TrackList trackList={this.state.trackList}/>
          </div>
          <div className="col-md-4">
            <Controls submitHandler={searchTracks.bind(this)} clickHandler={clickHandler.bind(this)}/>
          </div>
        </div>
       </div>
    );
  }

}

export default App;
