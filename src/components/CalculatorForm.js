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
    // alert(this.state.inputValue);
    let result = this.props.handleForm(this.state.inputValue);
    // alert(JSON.stringify(result));
  }

  handleChange (event){
    this.setState({
      inputValue:event.target.value
    });
  }

  render (){
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <label>
            Input a number:
            <input
              value={this.state.inputValue}
              type="number"
              id="numberInput"
              onChange={this.handleChange}
              name="numberInput"/>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

