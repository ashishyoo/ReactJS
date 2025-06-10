import { useRef, useState } from "react";

const UseRef = () => {
  const [count, setCount] = useState(0);
  const refCount = useRef(0);

  const handleIncrement = () => {
    setCount(count + 1);
    refCount.current++;

    console.log("count: ", count);
    console.log("refCount: ", refCount.current);
  };

  return (
    <div>
      <h1>useRef</h1>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>Count</button>
    </div>
  );
};

export default UseRef;
