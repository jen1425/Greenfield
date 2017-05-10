import React from 'react';
import Search from './Search.js';
import FilterList from './FilterList';
import CreateFilter from './CreateFilter';

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div className='controls'>
        <Search submitHandler={this.props.submitHandler} />
        <h3>Your Filters</h3>
        <FilterList clickHandler={this.props.clickHandler}/>
        <h3>Create a New Filter</h3>
        <CreateFilter />
      </div>
    );
  }
}

export default Controls;