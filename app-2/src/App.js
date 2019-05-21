import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()

    this.state = {
      arrayOfThings: ['apple', 'banana', 'pear', 'peach']
    }
  }
  render() {
    let newArrayOfThings = []
    for (let i=0; i < this.state.arrayOfThings.length; i++) {
      newArrayOfThings.push(<h2 key={i}>{this.state.arrayOfThings[i]}</h2>)
    }
    return (
      <div className="App">
        {newArrayOfThings}
      </div>
    );
  }
}

export default App;
