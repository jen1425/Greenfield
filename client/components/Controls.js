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

  updateFilters(newFilter) {
    this.setState({filters: this.state.filters.concat([newFilter])});
  }

  render() {

    return (
      <div className='controls'>
        <Search submitHandler={this.props.submitHandler} />
        <div className='filter-outline'>
          <div className="panel-heading">
            <h3 className="panel-title">Your Filters</h3>
          </div>
          <div className="panel-body">
            <FilterList clickHandler={this.props.clickHandler}filters={this.state.filters}/>
            <div className="h3">Create a New Filter</div>
            <CreateFilter updateFilters={this.updateFilters.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Controls;