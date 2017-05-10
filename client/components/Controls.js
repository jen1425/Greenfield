import React from 'react';
import Search from './Search.js';
import FilterList from './FilterList';
import CreateFilter from './CreateFilter';
import axios from 'axios';

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: []
    };
  }

  componentDidMount() {
    let that = this;
    axios.get('/filters').then(function(results) {
      that.setState({filters: results.data});
    }).catch(function(error) {
      console.log('error in Controls geting filter list', error);
    });
  }
  
  render() {
    return (
      <div className='controls'>
        <Search submitHandler={this.props.submitHandler} />
        <h3>Your Filters</h3>
        <FilterList clickHandler={this.props.clickHandler}filters={this.state.filters}/>
        <h3>Create a New Filter</h3>
        <CreateFilter />
      </div>
    );
  }
}

export default Controls;