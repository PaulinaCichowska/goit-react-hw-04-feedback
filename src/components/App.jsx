import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions'
import { Statistics } from './Statistics/Statistics'
import { Notification } from './Notification/Notification'
import React, { Component } from 'react';



export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  }

  countTotalFeedback = () => {
    this.setState((state) => ({
      total: state.good + state.neutral + state.bad,
    }))
  }

  countPositiveFeedbackPercentage = () => {
    this.setState((state) => ({
      positivePercentage: Math.floor((state.good / state.total) * 100),
    }))

  }
  handleIncrement = (e) => {
    const { name } = e.target
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }))

    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
  }




  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state
    return <>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={this.handleIncrement}  ></FeedbackOptions>
      </Section >
      <Section title="Statistics">
        {total === 0
          ? <Notification message="There is no feedback"></Notification>
          : <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}></Statistics>}
      </Section>
    </>
  }
};
