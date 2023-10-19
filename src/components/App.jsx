import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions'
import React, { Component } from 'react';

export class App extends Component {
  static defaultProps = {
    step: 1,
  }

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleIncrement = (event) => {

    this.setState(prevState => {
      console.log(prevState.value);// zwróci poprawne wartości stanu podczas każdej iteracji

      return { value: prevState.value + 1 };
    });
  }

  render() {
    return <>
      <div>
        <h2>Please leave feedback </h2>
        <input name="good" onClick={this.handleIncrement} type="button" value={this.state.good} />
        <input name="neutral" onClick={this.handleIncrement} type="button" value={"neutral"} />
        <input name="bad" onClick={this.handleIncrement} type="button" value={"bad"} />
      </div>;
      <div>
        <h2>Statistics</h2>
        <ul>
          <li>good {this.state.good}</li>
          <li>Neutral {this.state.neutral}</li>
          <li>Bad {this.state.bad}</li>
          <li>Total</li>
          <li>Positive feedback </li>
        </ul>

      </div>
    </>
  }
};
