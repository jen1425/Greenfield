import React from 'react';
import TrackList from './TrackList.js';
import Controls from './Controls.js';
import Search from './Search.js';
import Nav from './Nav.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trackList: this.props.trackList
    };
  }

  render () {

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
            <Controls submitHandler={searchTracks.bind(this)} />
          </div>
        </div>
       </div>
    );
  }

}

export default App;
