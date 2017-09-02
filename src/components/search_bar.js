import React, { Component } from 'react'

//class-based component (ES6)
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' }
  }

  render() { //method definition in ES6
    return <input onChange={event => console.log(event.target.value)} />;
  }

}

export default SearchBar;