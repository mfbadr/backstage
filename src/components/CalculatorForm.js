import React, { Component } from 'react';

export default class CalculatorForm extends Component {
  //TODO: Restrict to positive integers?
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '0'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit (event){
    event.preventDefault();
    this.props.handleForm(this.state.inputValue);
  }

  handleChange (event){
    this.setState({
      inputValue:event.target.value
    });
  }

  render (){
    return (
      <div className="form-wrapper">
        <form action="" onSubmit={this.handleSubmit}>
          <label>
            Input a number:
            <input
              value={this.state.inputValue}
              type="number"
              id="numberInput"
              min="1"
              max="100"
              step="1"
              onChange={this.handleChange}
              name="numberInput"/>
          </label>
          <button className="submit-button "type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

