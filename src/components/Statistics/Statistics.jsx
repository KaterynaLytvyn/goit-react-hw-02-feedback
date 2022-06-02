import PropTypes from 'prop-types';
import s from './Statistics.module.css';


const Statistics = (props) => {
  const {good, neutral, bad, total, positivePercentage} = props;

  return (
      <div>
        <h1>Statistics</h1>
        <ul>
          <li>good: {good}</li>
          <li>neutral: {neutral}</li>
          <li>bad: {bad}</li>
          <li>total: {total}</li>
          <li>Positive feedback: {positivePercentage} %</li>
        </ul>
      </div>
    )

  }

export default Statistics;