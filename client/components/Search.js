import React from 'react';

class Search extends React.Component {
  constructor(props) {
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
    console.log('Submithandler will send ', this.state.searchTerm);
    this.props.submitHandler(this.state.searchTerm); 
  }

  checkBoxhandler(e) {
    console.log('ClickHandler captured ', e.target.value);
    this.setState({
      searchTerm: this.state.searchTerm + ', ' + e.target.value
    });
    //console.log('ClickHandler changes state to reflect ', this.state.searchTerm);
  }

  render() { 

    return (<div>
      {/*<input type="text" onChange={this.textHandler.bind(this)}/>
      <input type="button" value="Search for tracks" onClick={this.submitHandler.bind(this)} />*/}
      <form>
        <input type="checkbox" 
        name="genre" 
        value="Classical" 
        id="Classical"
        onChange={this.checkBoxhandler.bind(this)} />
        <label for="Classical"> Classical </label>

        <input type="checkbox" 
        name="genre" 
        value="Country" 
        id="Country"
        onChange={this.checkBoxhandler.bind(this)} />
        <label for="Country"> Country </label>

        <input type="checkbox" 
        name="genre" 
        value="Pop" 
        id="Pop"
        onChange={this.checkBoxhandler.bind(this)} />
        <label for="Pop"> Pop </label>
        </form>

        <input type="submit" 
        value="Search" 
        onClick={this.submitHandler.bind(this)} />

    </div>);

  }
} 

export default Search;