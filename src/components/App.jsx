import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions'
import { Statistics } from './Statistics/Statistics'
import { Notification } from './Notification/Notification'

import css from "./App.module.css"
import { useState, useEffect } from "react";



export const App = () => {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [total, setTotal] = useState(0);
    const [positivePercentage, setPositivePercentage] = useState(0);

    //obliczanie procentów//
    useEffect(() => {
        setPositivePercentage(Math.floor((good / total) * 100))
        console.log(good)
    }, [good, total]);


    //dodawanie//
    const handleIncrement = (e) => {
        const { name } = e.target
        switch (name) {
            case 'good':
                setGood(good + 1);
                setTotal(total + 1);
                break;
            case 'neutral':
                setNeutral(neutral + 1);
                setTotal(total + 1);
                break;
            case 'bad':
                setBad(bad + 1);
                setTotal(total + 1);
                break;
            default:
                console.log(ErrorEvent)
        }

    }


    return (
        <div className={css.container}>
            <Section title="Please leave feedback">
                <FeedbackOptions onLeaveFeedback={handleIncrement}  ></FeedbackOptions>
            </Section >
            <Section title="Statistics">
                {total === 0
                    ? <Notification message="There is no feedback"></Notification>
                    : <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}></Statistics>}
            </Section>
        </div>
    )
};
