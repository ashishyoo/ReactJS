import { useState, useEffect } from "react";

const UseEffectThree = () => {
  const [count, setCount] = useState(0);
  const [temp, setTemp] = useState(0);

  useEffect(() => {
    console.log(`Count: ${count}`);
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleTempIncrement = () => {
    setTemp(temp + 1);
  };

  const handleTempDecrement = () => {
    setTemp(temp - 1);
  };

  return (
    <div>
      <h1>useEffect three</h1>
      <h2>Count: {count}</h2>
      <h2>Temp Count: {temp}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleTempIncrement}>Increment Temp</button>
      <button onClick={handleTempDecrement}>Decrement Temp</button>
    </div>
  );
};

export default UseEffectThree;
