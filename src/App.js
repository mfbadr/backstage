import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CalculatorForm from './components/CalculatorForm.js';

class App extends Component {
  //App state will store:
  ////previous queries:{ '2': occurances: "3", "last_datetime"}

  calculateAsync(inputNumber){
    let squareOfSums = 0;
    for (let i = 0; i <= inputNumber; i++) {
      squareOfSums += i;
    }
    squareOfSums = Math.pow(squareOfSums, 2)
    //sum of squares
    let sumOfSquares = 0;
    for (let n = 0; n <= inputNumber; n++) {
      sumOfSquares += Math.pow(n, 2);
    }
    return {
      squareOfSums: squareOfSums,
      sumOfSquares: sumOfSquares
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Backstage Calculator</h1>
        </header>
        <CalculatorForm calculatorFunc={this.calculateAsync.bind(this)}/>
      </div>
    );
  }
}

export default App;

