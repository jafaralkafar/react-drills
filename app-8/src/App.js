import React, { Component } from "react";
import "./App.css";
import axios from "axios"

class App extends Component {
  constructor() {
    super()

    this.state = {
      ditto: ''
    }
  }

  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon/ditto/").then(response => {
      this.setState({
        ditto: response.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Name: {this.state.ditto.name}</h1>
        <h1>Order: {this.state.ditto.order}</h1>
        <h1>Height: {this.state.ditto.height}</h1>
        <h1>Weight: {this.state.ditto.weight}</h1>
      </div>
    );
  }
}

export default App;
