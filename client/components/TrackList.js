import React from 'react';
import TrackListItem from './TrackListItem.js';

class TrackList extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  };

  render () {
    return (
      <div className='track-list'>
        Track List component.
        {this.props.trackList.map(item => (<TrackListItem track={item} />))}
      </div>
    );
  }
}

export default TrackList;