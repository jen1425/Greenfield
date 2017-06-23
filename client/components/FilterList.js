import React from 'react';
import axios from 'axios';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class FilterList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.filters !== nextProps.filters) {
      this.setState({filters: nextProps.filters});
    }
  }

  handleClick(event) {
    event.preventDefault();
    console.log(event.target.id);
    this.props.clickHandler(event.target.id);
  }

  render () {
    if (this.state.filters.length === 0) {
      return (
      <div>
        You have not created any filters. 
      </div>
      );
    } else {
      return (
        <DropdownButton title='Select a Filter' id='select fiter dropdown'>
          {this.state.filters.map((filter, index) => 
          <MenuItem id={filter.id} key={index}onClick={(e) => this.handleClick(e)}>{filter.name}</MenuItem> )}
        </DropdownButton>
      );
    }
  }
}

export default FilterList;