import React from 'react';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container navbar-header">
          <p className="navbar-brand">TrackFilter</p>
        </div>
      </nav>
    );
  }
}

export default Nav;
