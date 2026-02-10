import { useReducer } from "react";

let initialState = 0;

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "incrementBy":
      return state + action.value;
    case "decrementBy":
      return state - action.value;
    default:
      return state;
  }
}

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>{state}</h2>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        increment
      </button>

      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "incrementBy", value: 5 });
        }}
      >
        IncrementBY 5
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrementBy", value: 5 });
        }}
      >
        DecrementBY 5
      </button>
    </div>
  );
};

export default Reducer;
