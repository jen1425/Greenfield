import React from 'react';
import TrackList from './TrackList.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trackList: this.props.trackList
    };
  }

  render () {

    var searchTracks = function(searchTerm) {
      searchTerm = searchTerm.slice(2);
      console.log('searchTerm received by App component ', searchTerm);
      var me = this;
      $.get('/tracks?genres=' + searchTerm, 
      function(data) {
        console.log(data);
        me.setState(
          {
            trackList: data
          }
        );
      });
    };

    return (
      <div>
        <TrackList trackList={this.state.trackList}/>
        <Search submitHandler={searchTracks.bind(this)} />
       </div>
    );
  }

}

export default App;
