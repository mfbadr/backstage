import React, { Component } from 'react';

export default class ResultsDisplay extends Component {
  //TODO: Restrict to positive integers?
  constructor(props) {
    super(props);
  };

  renderMessage (){
    return (
        <div className="results-wrapper">
          <h3>
            Input a number to get started
          </h3>
        </div>
      )
  }

  renderResults (){
    //TODO: don't show `1 times`
    const prettyDate = Date(this.props.curTime);
    let occurencesText = this.props.curOccurences;
    this.props.curOccurences > 1 ? occurencesText += ' times' : occurencesText += ' time';
    return (
      <div className="results-wrapper">
        <p className="result-line">
          Showing results for <strong>{this.props.curNumber.toLocaleString()}</strong>
        </p>
        <p className="results-line">
          The sum of squares is <strong>{this.props.curSumOfSquares.toLocaleString()}</strong>
        </p>
        <p className="results-line">
          The square of sums is <strong>{this.props.curSquareOfSums.toLocaleString()}</strong>
        </p>
        <p className="results-line">
          The difference is <strong>{this.props.curValue.toLocaleString()}</strong>
        </p>
        <p className="results-line">
          <strong>{this.props.curNumber.toLocaleString()}</strong> has been calculated <strong>{occurencesText}</strong> 
        </p>
        <p className="results-line">
          Most recent calculation performed at <strong>{prettyDate}</strong>
        </p>
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

