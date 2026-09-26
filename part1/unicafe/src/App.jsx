import { useState } from "react";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleBad = () => {
    setBad(bad + 1);
  };

  const handleGood = () => {
    setGood(good + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  return (
    <>
      <div>
        <h1>give feedback</h1>
      </div>
      <div>
        <Button onClick={handleGood} text="good" />
        <Button onClick={handleNeutral} text="neutral" />
        <Button onClick={handleBad} text="bad" />
      </div>
      <Statistics bad={bad} good={good} neutral={neutral} />
    </>
  );
}

const Button = (props) => {
  console.log("button clicked....");
  return (
    <>
      <button onClick={props.onClick}>{props.text}</button>
    </>
  );
};

const Statistics = (props) => {
  console.log(props);
  if (props.bad + props.good + props.neutral > 0) {
    return (
      <>
        <div>
          <div>
            <h1>statistics</h1>
          </div>

          <table>
            <thead></thead>
            <tbody>
              <tr>
                <td>good</td>
                <td>{props.good}</td>
              </tr>
              <tr>
                <td>neutral</td>
                <td>{props.neutral}</td>
              </tr>
              <tr>
                <td>bad</td>
                <td>{props.bad}</td>
              </tr>
              <tr>
                <td>all</td>
                <td>{props.bad + props.neutral + props.good}</td>
              </tr>
              <tr>
                <td>average</td>
                <td>
                  {(
                    (props.good - props.bad) /
                    (props.good + props.bad + props.neutral)
                  ).toFixed(1)}
                </td>
              </tr>
              <tr>
                <td>positive</td>
                <td>
                  {(
                    (props.good * 100) /
                    (props.good + props.bad + props.neutral)
                  )
                    .toFixed(1)
                    .toString() +
                    " " +
                    "%"}
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <p>No feedback given</p>
      </>
    );
  }
};

const StatisticLine = (props) => (
  <>
    <p>
      {props.text} {props.value}
    </p>
  </>
);

export default App;
