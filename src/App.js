import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CalculatorForm from './components/CalculatorForm.js';
import calculateAsync from './services/mockAPI.js';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      occurances: {},
      currentResult: undefined,
      lastRequest: undefined,
    }
  }
  //App state will store:
  ////previous queries:{ '2': occurances: "3", "last_datetime"}

  handleForm(inputNumber){
    let that = this;
    //update state with timestamp, input, occurances
    const lastDateTime = this.state.lastRequest;
    let curOccurences = this.state.occurances;
    if(this.state.occurances[inputNumber]){
      curOccurences[inputNumber]++
    } else {
      curOccurences[inputNumber] = 1;
    }

    let resultObj;
    calculateAsync(inputNumber).then(function(result){
      resultObj = result;
      that.setState({
        "lastRequest": Date.now(),
        "occurances": curOccurences,
        "currentResult": resultObj
      })
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Backstage Calculator</h1>
        </header>
        <CalculatorForm handleForm={this.handleForm.bind(this)}/>
        <pre>
          {JSON.stringify(this.state)}
        </pre>
      </div>
    );
  }
}

export default App;

