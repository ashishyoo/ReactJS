import UseCallBack from "./components/UseCallBack";
import UseContext from "./components/UseContext";
import UseEffectFour from "./components/UseEffectFour";
import UseEffectOne from "./components/UseEffectOne";
import UseEffectThree from "./components/UseEffectThree";
import UseEffectTwo from "./components/UseEffectTwo";
import UseFetch from "./components/UseFetch";
import UseMemo from "./components/UseMemo";
import UseReducer from "./components/UseReducer";
import UseRef from "./components/UseRef";
import UseState from "./components/UseState";
import CounterProvider from "./context/CounterContext";
const App = () => {
  return (
    <div>
      <UseState />
      <hr />
      <UseEffectOne />
      <hr />
      <UseEffectTwo />
      <hr />
      <UseEffectThree />
      <hr />
      <UseEffectFour />
      <hr />
      <UseMemo />
      <hr />
      <UseCallBack />
      <hr />
      <UseRef />
      <hr />
      <UseReducer />
      <hr />
      <UseFetch />
      <hr />
      <CounterProvider>
        <UseContext />
      </CounterProvider>
    </div>
  );
};

export default App;
