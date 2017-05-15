import React from 'react';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {

    var style = {
      backgroundImage: "url(https://pbs.twimg.com/profile_images/378800000470474009/575a67d4481c28fb51c962e71f7d1be6_400x400.png)",
      height: '140px',
      color: 'white',
    }

    return (
        <div className="page-header align" style={style}>
          <h1 className="text-center">TrackFilter</h1>
        </div>
    );
  }
}

export default Nav;
