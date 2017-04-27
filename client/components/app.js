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
    console.log('TrackList ', this.state.trackList);

    var searchTracks = function(searchTerm) {
      console.log(searchTerm);
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
