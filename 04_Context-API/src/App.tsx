import Counter from "./components/Counter";
import CounterProvider from "./context/CounterContext";

const App = () => {
  return (
    <div>
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </div>
  );
};

export default App;
