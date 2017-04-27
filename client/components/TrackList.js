import React from 'react';
import TrackListItem from './TrackListItem.js';

class TrackList extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  };

  render () {
    return (
      <div className='track-list' >
        <div className="text-center" >Track List Component</div>
        {this.props.trackList.map(item => (<TrackListItem track={item} />))}
      </div>
    );
  }
}

export default TrackList;