import React from 'react';
import axios from 'axios';

class TrackListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iframe: ''
    };
  }

  componentDidMount() {
    this.getIframe();
  }

  componentWillReceiveProps() {
    this.setState({
      iframe: this.props.track.origin.permalink_url
    });
    this.getIframe();
  }

  getIframe() {
    axios.get('https://soundcloud.com/oembed',
      {
        params: {
          url: this.props.track.origin.permalink_url,
          format: 'json',
          maxheight: '166',
          maxwidth: '600'
        }
      }).then( response => {
        this.setState({iframe: response.data});

      }).catch( error => { console.log(error); });
  }

  render () {   
    return (
      <div dangerouslySetInnerHTML={{__html: this.state.iframe.html}}></div>
    );
  }
}

export default TrackListItem;