import React, { Component } from 'react'

//class-based component (ES6)
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchInput: '' } //This is the only time we set state like this. We usually use setState
  }

  render() { //method definition in ES6
    return (
      <div>
      <input onChange={event => this.setState({ searchInput: event.target.value })} />
      </div>
    )
  }

}

export default SearchBar;