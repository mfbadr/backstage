import React, { Component } from 'react';

export default class ResultsDisplay extends Component {
  // constructor(props) {
  //   super(props);
  // };

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
    const prettyDate = new Date(this.props.curTime).toString();
    let prettyLastDate;
    if(this.props.curPreviousTime){
      prettyLastDate =( <p className="results-line">
          Previous calculation performed at <strong>{new Date(this.props.curPreviousTime).toString()}</strong>
        </p> )
    }

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
        {prettyLastDate}
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

