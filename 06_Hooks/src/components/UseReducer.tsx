import { useReducer } from "react";
import { countReducer, initialState } from "../reducers/countReducer";

const UseReducer = () => {
  const [state, dispatch] = useReducer(countReducer, initialState);
  return (
    <div>
      <h1>useReducer</h1>
      <h3>Count: {state.count}</h3>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};

export default UseReducer;
