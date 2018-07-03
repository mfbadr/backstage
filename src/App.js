import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CalculatorForm from './components/CalculatorForm.js';
import ResultsDisplay from './components/ResultsDisplay.js';
import calculateAsync from './services/mockAPI.js';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      occurences: {},
      currentResult: {
        "number": undefined,
        "squareOfSums": undefined,
        "sumOfSquares": undefined,
        "value": undefined,
      },
      lastRequest: undefined,
    }
  }
  //App state will store:
  ////previous queries:{ '2': occurances: "3", "last_datetime"}

  handleForm(inputNumber){
    let that = this;
    const lastDateTime = this.state.lastRequest;
    let curOccurences = this.state.occurances;
    if(this.state.occurances[inputNumber]){
      curOccurences[inputNumber]++
    } else {
      curOccurences[inputNumber] = 1;
    }

    const dateNow = Date.now().toString();
    calculateAsync(inputNumber).then(function(result){
      that.setState({
        "lastRequest": dateNow,
        "occurances": curOccurences,
        "currentResult": result
      })
    });
  }

  render() {
    let curOccurences = this.state.occurances[this.state.currentResult.number] || null;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Backstage Calculator</h1>
        </header>
        <CalculatorForm handleForm={this.handleForm.bind(this)}/>
        <ResultsDisplay 
          curNumber={this.state.currentResult.number}
          curSquareOfSums={this.state.currentResult.squareOfSums}
          curSumOfSquares={this.state.currentResult.sumOfSquares}
          curValue={this.state.currentResult.value}
          curTime={this.state.lastRequest}
          curOccurences = {curOccurences}
        />

      </div>
    );
  }
}

export default App;

