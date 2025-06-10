import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const UseContext = () => {
  const { count, increment, decrement } = useContext(CounterContext);
  return (
    <div>
      <h1>useContext</h1>
      <h3>Count: {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default UseContext;
