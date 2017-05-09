import React from 'react';
import TrackListItem from './TrackListItem.js';

class TrackList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div className='track-list' >
        {this.props.trackList.map((item, index) => (<TrackListItem key={index} track={item} />))}
      </div>
    );
  }
}

export default TrackList;