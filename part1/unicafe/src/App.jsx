import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad, total }) => {
  const average = (good - bad) / total;
  const positivePercentage = (good / total) * 100;

  if (total === 0) return <p>No feedback given</p>;

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good}></StatisticLine>
        <StatisticLine text="neutral" value={neutral}></StatisticLine>
        <StatisticLine text="bad" value={bad}></StatisticLine>
        <StatisticLine text="total" value={total}></StatisticLine>
        <StatisticLine text="average" value={average}></StatisticLine>
        <StatisticLine
          text="positive"
          value={positivePercentage + " %"}
        ></StatisticLine>
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const increaseGood = () => {
    setTotal(total + 1);
    setGood(good + 1);
  };
  const increaseNeutral = () => {
    setTotal(total + 1);
    setNeutral(neutral + 1);
  };
  const increaseBad = () => {
    setTotal(total + 1);
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <p>
        <Button onClick={increaseGood} text="good"></Button>
        <Button onClick={increaseNeutral} text="neutral"></Button>
        <Button onClick={increaseBad} text="bad"></Button>
      </p>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  );
};

export default App;
