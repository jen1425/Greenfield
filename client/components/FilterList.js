import React from 'react';
import axios from 'axios';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class FilterList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: []
    };
  }

  // componentWillMount() {
  //   axios.get('/tempfilters', {
  //     params: {
  //       userId: '2'
  //     }
  //   });
  // }

  render () {
    if (this.state.filters.length === 0) {
      return (
      <div>
        You have not created any filters. 
      </div>
      );
    } else {
      return (
        <DropdownButton title='Select a Filter'>
          {this.state.filters.map((name, index) => 
          <MenuItem eventKey={index} key={index}>{this.state.filters[index]}</MenuItem> )}
        </DropdownButton>
      );
    }
  }
}

export default FilterList;