import React, { Component } from 'react'

//class-based component (ES6)
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchInput: 'Starting value' } //This is the only time we set state like this. We usually use setState
  }

  render() { //method definition in ES6
    //Add 'value' to make it a controlled component: controlled by the state -- more declarative syntax
    return (
      <div className="search-bar">
      <input
        onChange={event => this.onInputChange(event.target.value)} />
      </div>
    )
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchEntered(term);
  }
}

export default SearchBar;