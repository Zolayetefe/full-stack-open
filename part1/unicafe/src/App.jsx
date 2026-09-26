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
        <button onClick={handleGood}>good</button>
        <button onClick={handleNeutral}>neutral</button>
        <button onClick={handleBad}>bad</button>
      </div>
      <div>
        <h1>statistics</h1>
      </div>
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {bad + neutral + good}</p>
        <p>average {(good -bad)/(good + bad + neutral ) }</p>
        <p>positive {(good * 100 )/(good + bad + neutral)}%</p>
      </div>
    </>
  );
}

export default App;
