import React, { Component } from 'react';
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
      previousRequest: undefined
    }
  }
  //App state will store:
  ////previous queries:{ '2': occurences: "3", "last_datetime"}

  handleForm(inputNumber){
    let that = this;
    const lastDateTime = this.state.lastRequest;


    calculateAsync(inputNumber, this.state.occurences[inputNumber] || 0, lastDateTime).then(function(result){
      let occurencesObj = that.state.occurences;
      occurencesObj[inputNumber] = result.occurences;

      that.setState({
        "lastRequest": result.datetime,
        "previousRequest": result.last_datetime,
        "occurences": occurencesObj,
        "currentResult": {
          "number": result.number,
          "squareOfSums": result.squareOfSums,
          "sumOfSquares": result.sumOfSquares,
          "value": result.value,
        }
      })
    });
  }

  render() {
    let curOccurences = this.state.occurences[this.state.currentResult.number];
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
          curPreviousTime={this.state.previousRequest}
          curOccurences={curOccurences}
        />

      </div>
    );
  }
}

export default App;

