import React from 'react';
import axios from 'axios';

class TrackListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iframe: ''
    };
    this.getIframe
  }

  componentDidMount() {
    this.getIframe()
  }

  getIframe() {
    axios.get('http://soundcloud.com/oembed',
      {
        params: {
          url: this.props.track.permalink_url,
          format: 'json',
          maxheight: '166',
          maxwidth: '600'
        }
    }).then( response => {
     this.setState({iframe: response.data});
    }).catch( error => {console.log(error)})
  }
  render () {

    this.props.track.permalink_url
    return (
      <div>{this.props.track.permalink_url}</div>
    )
  }
}

export default TrackListItem;