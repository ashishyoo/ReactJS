import { useReducer, useState } from "react";
import { counterReducer, intialState } from "../reducers/counterReducer";

const Counter = () => {
  const [input, setInput] = useState("");
  const [state, dispatch] = useReducer(counterReducer, intialState);

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleCustomIncrement = () => {
    dispatch({ type: "INCREMENT_VALUE", payload: Number(input) });
  };

  const handleCustomDecrement = () => {
    dispatch({ type: "DECREMENT_VALUE", payload: Number(input) });
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {state.count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <br />
      <br />

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleCustomIncrement}>Increment Custom</button>
      <button onClick={handleCustomDecrement}>Decrement Custom</button>
    </div>
  );
};

export default Counter;
