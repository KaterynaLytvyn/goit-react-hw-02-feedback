import PropTypes from 'prop-types';


const Statistics = (props) => {
  const {good, neutral, bad, total, positivePercentage} = props;

  return (
        <ul>
          <li>good: {good}</li>
          <li>neutral: {neutral}</li>
          <li>bad: {bad}</li>
          <li>total: {total}</li>
          <li>Positive feedback: {positivePercentage} %</li>
        </ul>
    )
  }

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;