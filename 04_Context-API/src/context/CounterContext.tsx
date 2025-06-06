import { createContext, useState, type ReactNode } from "react";

interface ICounterContext {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const CounterContext = createContext<ICounterContext>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

interface ICounterProvider {
  children: ReactNode;
}

const CounterProvider = ({ children }: ICounterProvider) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
