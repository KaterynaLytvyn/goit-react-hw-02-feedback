import React from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

class App extends React.Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = statValue => {

    this.setState(
      prevState => 
      {
        let result = {};
        result[statValue] = prevState[statValue] + 1; 

        return result;
      }
    );

  }

  countTotalFeedback() {
    const values = Object.values(this.state)
    const total = values.reduce((partialSum, a) => partialSum + a, 0)
    
    return total
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const positive = Math.round((this.state.good/total)*100);

    return positive? positive:0
  }

  render() {
    const { good, neutral, bad } = this.state;

    return(
      <div>
      <FeedbackOptions 
        options={Object.keys(this.state)}
        onLeaveFeedback = {this.onLeaveFeedback}
      />
      {this.countTotalFeedback()>0? 
      <Statistics 
        good = {good}
        neutral = {neutral}
        bad = {bad}
        total = {this.countTotalFeedback()}
        positivePercentage = {this.countPositiveFeedbackPercentage()}
      />
      :
      <Notification message="There is no feedback"></Notification>
      }
    </div>
    )
  }
}

export default App;

