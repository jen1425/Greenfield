import React from 'react';
import axios from 'axios';
import { FormGroup, FormControl, ControlLabel, Button, FieldGroup } from 'react-bootstrap';


class CreateFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followings: [],
      newFilterFollowings: [],
      newFilterName: ''
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleChange(event) {
    this.setState({newFilterName: event.target.value});
  }

  handleSubmit(event) {
    let that = this;
    event.preventDefault();
    axios.post('/filters', {
      newFilterFollowings: this.state.newFilterFollowings,
      newFilterName: this.state.newFilterName
    })
  .then(function (response) {
    console.log('CreateFilter handleSubmit response', response);
    console.log('new filter ID', response.data);
    let newFilter = {id: response.data, name: that.state.newFilterName};
    that.props.updateFilters(newFilter);
    alert('New Filter Created!');
    that.setState({newFilterFollowings: [], newFilterName: ''});
  })
  .catch(function (error) {
    console.log('CreateFilter handleSubmit error', error);
  });
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="formBasicText">
          <ControlLabel>Name Your Filter</ControlLabel>
          <FormControl
            type="text"
            value={this.state.newFilterName}
            placeholder="Filter Name"
            onChange={this.handleChange}
          />
        </FormGroup>
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