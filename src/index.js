import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component to produce some html
const App = () => {   // const means that this is the final value. Here we are making a component.
  return <div>Hello!</div>; // This is JSX, which gets transpiled to javascript.
                            // Test here: http://babeljs.io/repl
}
// Put the component HTML into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));   // To make an instance of the App class, we wrap it in a JSX tag

