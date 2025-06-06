import { useRef } from "react";

const Input = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <h1>Focus</h1>
      <input type="text" ref={inputRef} placeholder="Enter something.." />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
};

export default Input;
