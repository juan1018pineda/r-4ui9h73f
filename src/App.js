import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.write = this.write.bind(this);
    this.state = {
      text: "",
    };
  }

  write(event) {
    this.setState({
      text: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" onChange={this.write} />
        <p className="repeater">{this.state.text}</p>
      </div>
    );
  }
}

export default App;
