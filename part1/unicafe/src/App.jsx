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
       <Button onClick={handleGood} text="good"/>
       <Button onClick={handleNeutral} text= "neutral"/>
       <Button onClick = {handleBad} text="bad"/>
      </div>
      <Statistics bad={bad} good={good} neutral={neutral} />
    </>
  );
}

const Button = (props)=>{
  console.log("button clicked....")
  return (
    <>  
  <button onClick={props.onClick}>{props.text}</button>
</>
  )
}


const Statistics = (props) => {
  console.log(props)
  if (props.bad + props.good + props.neutral > 0) {
    return (
      <>
        <div>
          <div>
            <h1>statistics</h1>
          </div>
          <div>
            <StatisticLine text="good" value={props.good} />
            <StatisticLine text="neutral" value={props.neutral} />
            <StatisticLine text="bad" value={props.bad} />
            <StatisticLine
              text="all"
              value={props.bad + props.neutral + props.good}
            />
            <StatisticLine
              text="average"
              value={
                (props.good - props.bad) /
                (props.good + props.bad + props.neutral)
              }
            />

            <StatisticLine
              text="positive"
              value={
                (
                  (props.good * 100) /
                  (props.good + props.bad + props.neutral)
                ).toString() +
                " " +
                "%"
              }
            />
          </div>
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
)

export default App;
