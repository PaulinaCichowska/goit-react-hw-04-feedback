import PropTypes from "prop-types"




export const FeedbackOptions = ({ onLeaveFeedback }) =>
    <div>
        <button name={"good"} onClick={onLeaveFeedback} className="good">good</button>
        <button name={"neutral"} onClick={onLeaveFeedback} className="neutral">neutral</button>
        <button name={"bad"} onClick={onLeaveFeedback} className="bad">bad</button>
    </div>

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func,
}