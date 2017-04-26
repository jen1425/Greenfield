import React from 'react';

class TrackListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>{this.props.track}</div>
    )
  }
}

export default TrackListItem;