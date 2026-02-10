import { useState } from "react";

let timer; // if this is put inside counter component/function it will create a new instance on each reload/click, to create a timer make it in outer scope or make a refrence so it not re-render on reload

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>{counter}</p>
      <button
        onClick={() => {
          timer = setInterval(() => {
            setCounter((count) => count + 1);
          }, 1000);
        }}
      >
        Start
      </button>
      <button onClick={() => clearInterval(timer)}>Pause</button>
      <button
        onClick={() => {
          clearInterval(timer);
          setCounter(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
