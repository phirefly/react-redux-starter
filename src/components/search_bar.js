import React, { Component } from 'react'

//class-based component (ES6)
class SearchBar extends Component {
  render() { //method definition in ES6
    return <input onChange={this.onInputChange} />;
  }

  onInputChange(event) {
    console.log(event.target.value);
  }
}

export default SearchBar;