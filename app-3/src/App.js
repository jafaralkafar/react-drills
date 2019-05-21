import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      filterer: '',
      arrayOfThings: ['apple', 'banana', 'pear', 'peach']
    }
  }

  handleChange(value) {
    this.setState({filterer: value})
  }

  render() {
    let filteredArray = this.state.arrayOfThings
    .filter(elem => elem.includes(this.state.filterer))
    .map((elem, i) => <h2 key={i}>{elem}</h2>)
    return (
      <div className="App">
        <input type='text' onChange={e=>this.handleChange(e.target.value)}/>
        {filteredArray}
      </div>
    );
  }
}

export default App;
