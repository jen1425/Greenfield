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

    var searchTracks = function(searchTerm) {
      console.log('searchTerm ---> ', searchTerm);
      searchTerm = searchTerm.slice(1);
      console.log('searchTerm received by App component -->', searchTerm);
      var me = this;
      $.get('/filter?genres=' + searchTerm,
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
