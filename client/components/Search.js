import React from 'react';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: ''
    };
  }

  textHandler(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }

  submitHandler() {
    this.props.submitHandler(this.state.searchTerm);
  }

  render() { 

    return (<div>
      <input type="text" onChange={this.textHandler.bind(this)}/>
      <input type="button" value="Search for tracks" onClick={this.clickHandler.bind(this)} />
    </div>);

  }
} 