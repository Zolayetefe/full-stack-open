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
    <Statistics bad= {bad} good= {good} neutral= {neutral}/>
    </>
  );
}


const Statistics = (props)=>{

return (
    <>
  <div>
        <h1>statistics</h1>
      </div>
      <div>
        <p>good {props.good}</p>
        <p>neutral {props.neutral}</p>
        <p>bad {props.bad}</p>
        <p>all {props.bad + props.neutral + props.good}</p>
        <p>average {(props.good -props.bad)/(props.good + props.bad + props.neutral ) }</p>
        <p>positive {(props.good * 100 )/(props.good + props.bad + props.neutral)}%</p>
      </div>
  </>
)
}
export default App;
