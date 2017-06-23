import React from 'react';
import axios from 'axios';

class TrackListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iframe: ''
      // author: ''
    };
  }

  componentDidMount() {
    this.getIframe();
  }

  componentWillUpdate() {
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
        // console.log('RESPONSE ', response.data);
        this.setState({iframe: response.data});
        // this.setState({author: response.data.author_name});

      }).catch( error => { console.log(error); });
  }

  render () {
    return (
      <div>
        {/* <div>Created By: {this.state.author}</div>*/}
        <div dangerouslySetInnerHTML={{__html: this.state.iframe.html}}></div>
      </div>
    );
  }
}

export default TrackListItem;