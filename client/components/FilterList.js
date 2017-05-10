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

  componentWillMount() {
    let that = this;
    axios.get('/filters').then(function(results) {
      that.setState({filters: results.data});
    }).catch(function(error) {
      console.log('error in FilterList', error);
    });
  }

  handleClick(event) {
    event.preventDefault();
    console.log(event.target.id);
    this.props.clickHandler(event.target.id);
  //   axios.get('/feed', {
  //     params: {
  //       id: event.target.id
  //     }
  //   })
  // .then(function (response) {
  //   console.log('YAY filtered feed');
  //   console.log(response.data[0].origin.user.username);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
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