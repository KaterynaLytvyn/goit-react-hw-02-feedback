import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css'

const FeedbackOptions = (props) => {
    const {options, onLeaveFeedback} = props;

        return (
              <ul className={s.list}>
                {options.map(option => 
                    <li className={s.list__item} key={option}>
                        <button type="button" onClick={() => onLeaveFeedback(option)}>{option}</button>
                    </li>
                )}
              </ul>      
          )
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;