import React, { Component } from 'react';

export default class CalculatorForm extends Component {
  constructor(props) {
    super(props);
  };
  render (){
    return (
      <div>
        <form>
          <label>
            Input a number:
            <input type="number" id="numberInput" name="numberInput"/>
          </label>
        </form>
      </div>
      )
  }
}