import PropTypes from "prop-types"
import css from "./FeedbackOptions.module.css"



export const FeedbackOptions = ({ onLeaveFeedback }) =>
    <div className={css.buttonList}>
        <button className={css.button} name={"good"} onClick={onLeaveFeedback} >good</button>
        <button className={css.button} name={"neutral"} onClick={onLeaveFeedback} >neutral</button>
        <button className={css.button} name={"bad"} onClick={onLeaveFeedback} >bad</button>
    </div>

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func,
}