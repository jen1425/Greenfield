import React from 'react';
import Search from './Search.js';

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  };
  
  render() {
    return (
      <div className='controls'>
        <Search submitHandler={this.props.submitHandler} />
      </div>
    );
  }
}

export default Controls;