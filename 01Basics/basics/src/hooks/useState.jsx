import { useState } from "react";

const State = () => {
  const [state, setState] = useState(0);
  const increment = () => {
    setState(state + 1);
  };
  const decrement = () => {
    setState(state - 1);
  };
  return (
    <div>
      <h1>{state}</h1>
      <button style={{border:"1px solid white"}} onClick={increment}>Increment</button>
      <button style={{border:"1px solid white"}} onClick={decrement}>Decrement</button>
    </div>
  );
};

export default State;
