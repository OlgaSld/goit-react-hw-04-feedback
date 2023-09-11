import { useState } from 'react';
import { Feedback } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statictics/Statictics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Layout } from './Layout';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.round((good / totalFeedback) * 100);

  const options = { good, bad, neutral };

  const leaveFeedback = options => {
    switch (options) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  return (
    <Layout>
      <Section title="Please leave feedback">
        <Feedback
          options={Object.keys(options)}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>
      <Section title="Statictics">
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Layout>
  );
};
