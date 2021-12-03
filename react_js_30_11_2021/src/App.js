import "./App.css";
import React, { Component } from "react";
import RandomGame from './components/RandomGame/RandomGame.js'

export default class App extends Component {
  render() {
    return (
    <div className='App'>
      <RandomGame/>
    </div>
    );
  }
}
