import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CalculatorForm from './components/CalculatorForm.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Backstage Calculator</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>foo</code> and save to reload.
        </p>
        <CalculatorForm/>
      </div>
    );
  }
}

export default App;

