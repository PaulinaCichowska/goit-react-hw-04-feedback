import PropTypes from "prop-types"
import css from "./Statistics.module.css"

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) =>
    <>
        <ul className={css.list}>
            <li className={css.listItem}>good: {good}</li>
            <li className={css.listItem}>Neutral: {neutral}</li>
            <li className={css.listItem}>Bad: {bad}</li>
            <li className={css.listItem}>Total: {total}</li>
            <li className={css.listItem}>Positive feedback: {positivePercentage} %</li>
        </ul>
    </>


Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}