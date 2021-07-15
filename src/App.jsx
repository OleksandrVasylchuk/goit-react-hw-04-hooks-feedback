import React, {  useState } from "react";
// import styled from '@emotion/styled/macro'
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions";
import Notification from "./Components/Notification/Notification";
import Statistics from "./Components/Statistics/Statistics";
import Section from "./Components/Section/Section";


export default function App(){
  
  const  [ good, setGood ] = useState(0);
  const  [ neutral, setNeutral ] = useState(0);
  const  [ bad, setBad ] = useState(0);
    
  

 const  leaveFeedback = option => {
    switch (option) {
      case 'good': setGood(prevState => prevState + 1);
        break;
      
      case 'neutral': setNeutral(prevState => prevState + 1);
        break;
      
      case 'bad': setBad(prevState => prevState + 1)
        break;
      
      default:
        return;
        
    }
    
  };

 const totalFeedback = () =>  good + neutral + bad;

  const  positiveFeedbackPercentage = () => {
    return Math.round((good * 100) / totalFeedback()) || 0;
  };

  

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={leaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback()}
              positivePercentage={positiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  
}

