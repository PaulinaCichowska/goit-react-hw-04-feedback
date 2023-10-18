import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions'
import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }


  render() {
    return <>
      <div>
        <h2>Please leave feedback </h2>
        <input type="button" value={"good"} />
        <input type="button" value={"neutral"} />
        <input type="button" value={"bad"} />
      </div>;
      <div>
        <h2>Statistics</h2>
        <ul>
          <li>good</li>
          <li>Neutral</li>
          <li>Bad</li>
          <li>Total</li>
          <li>Positive feedback </li>
        </ul>

      </div>
    </>
  }
};
