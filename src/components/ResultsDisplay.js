import React, { Component } from 'react';

export default class ResultsDisplay extends Component {
  //TODO: Restrict to positive integers?
  constructor(props) {
    super(props);
  };


  render (){
    return (
      <div>
        {this.props.curNumber}
        -
        {this.props.curValue}
        -
        {this.props.curSumOfSquares}
        -
        {this.props.curSquareOfSums}
        -
        {this.props.curTime}
      </div>
    )
  }
}

