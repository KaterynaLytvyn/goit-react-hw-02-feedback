import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css'

const FeedbackOptions = (props) => {
    const {options, onLeaveFeedback} = props;

        return (
            <div>
              <h1>Please leave feedback</h1>
              <ul className={s.list}>
                {options.map(option => 
                    <li className={s.list__item} key={option}>
                        <button type="button" onClick={() => onLeaveFeedback(option)}>{option}</button>
                    </li>
                )}
              </ul>      
            </div>
          )
}

export default FeedbackOptions;