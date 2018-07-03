import React, { Component } from 'react';

export default class ResultsDisplay extends Component {
  //TODO: Restrict to positive integers?
  constructor(props) {
    super(props);
  };

  renderMessage (){
    return (
        <div>
          <h3>
            Input a number to get started
          </h3>
        </div>
      )
  }

  renderResults (){
    //TODO: don't show `1 times`
    const prettyDate = Date(this.props.curTime);
    return (
      <div>
        Showing results for <strong>{this.props.curNumber}</strong>
        <br></br>
        The sum of squares is <strong>{this.props.curSumOfSquares}</strong>
        <br></br>
        The square of sums is <strong>{this.props.curSquareOfSums}</strong>
        <br></br>
        The difference is <strong>{this.props.curValue}</strong>
        <br></br>
        {this.props.curNumber} has been calculated <strong>{this.props.curOccurences} times</strong> , most recently at {prettyDate}
      </div>
    )
  }

  render() {
    if(this.props.curNumber){
      return this.renderResults();
    } else {
      return this.renderMessage();
    }
  }
}

