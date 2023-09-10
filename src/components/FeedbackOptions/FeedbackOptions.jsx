import { FeedbackContainer, Button } from "./FeedbackOptions_styled";
import PropTypes from 'prop-types';


export const Feedback = ({ options, onLeaveFeedback }) => {
  const optionsObj = Object.keys(options);
    return (
      <FeedbackContainer>
        {optionsObj.map(option => (
          <Button
            key={option}
            type="button"
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </Button>
        ))}
      </FeedbackContainer>
    );
}


Feedback.propTypes = {
  option: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};