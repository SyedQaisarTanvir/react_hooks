import logo from "./logo.svg";
import "./App.css";
import UseState from "./Hooks/UseState";
import UseReducer from "./Hooks/UseReducer";
import UseEffect from "./Hooks/UseEffect";
import UseRef from "./Hooks/UseRef";
import UseLayoutEffect from "./Hooks/UseLayoutEffect";
import UseContext from "./Hooks/UseContext";
import UseImperativeHandle from "./Hooks/UseImperativeHandle";
import UseMemo from "./Hooks/UseMemo";
import UseCallback from "./Hooks/UseCallback";
import UseTransition from "./Hooks/UseTransition";

function App() {
  return (
    <div className="App">
      <UseTransition />
    </div>
  );
}

export default App;
