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
      searchTerm: this.state.searchTerm + ',' + e.target.value
    });
    //console.log('ClickHandler changes state to reflect ', this.state.searchTerm);
  }

  render() {

    return (<div className="search-bar">

      <form>
        <div className="checkbox-inline">
          <label for="Classical">
            <input type="checkbox"
            name="genre"
            value="Classical"
            id="Classical"
            onChange={this.checkBoxhandler.bind(this)} />
            Classical
          </label>
        </div>

        <div className="checkbox-inline">
          <label for="Country">
            <input type="checkbox"
            name="genre"
            value="Country"
            id="Country"
            onChange={this.checkBoxhandler.bind(this)} />
            Country
         </label>
        </div>

        <div className="checkbox-inline">
          <label for="Pop">
            <input type="checkbox"
            name="genre"
            value="Pop"
            id="Pop"
            onChange={this.checkBoxhandler.bind(this)} />
            Pop
          </label>
        </div>
      </form>

      <input type="submit"
      value="Search"
      onClick={this.submitHandler.bind(this)} />
    </div>);

  }
}

export default Search;