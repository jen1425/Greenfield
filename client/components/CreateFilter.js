import React from 'react';
import axios from 'axios';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';


class CreateFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followings: [],
      newFilterFollowings: []
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount () {
    let that = this;
    axios.get('/followings')
      .then(function(response) {
        that.setState({followings: response.data.collection});
      }).catch(function(error) {
        console.log(error);
      });
  }

  handleSelect(event) {
    let newFilterAttribute = {};
    newFilterAttribute[event.target.id] = event.target.value;
    this.setState({newFilterFollowings: this.state.newFilterFollowings.concat([newFilterAttribute])});
  }

  render () {
    return (
      <form>
        <FormGroup controlId="formControlsSelectMultiple">
          <ControlLabel>Filter by People You Follow (multi-select)</ControlLabel>
          <FormControl componentClass="select" multiple>
            {this.state.followings.map((user) => 
              <option key={user.id} id={user.id} value={user.username} onClick={(e) => this.handleSelect(e)}>{user.username}</option>)}
           </FormControl>
        </FormGroup>
        <Button type="submit">
          Create Filter
        </Button>
      </form>
      //implement a way to view what is selected. 
    );
  }
}

export default CreateFilter;