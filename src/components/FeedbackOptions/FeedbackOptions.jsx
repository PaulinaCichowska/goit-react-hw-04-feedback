import PropTypes from "prop-types"

export const FeedbackOptions = ({ options, onLeaveFeedback }) =>
    <div>
        <input type="button" value="good" />
        <input type="button" vlaue="Neutral" />
        <input type="button" value="Bad" />
    </div>


// FeedbackOptions.propTypes = {
//     title: PropTypes.string,
//     children: PropTypes.node,
// }