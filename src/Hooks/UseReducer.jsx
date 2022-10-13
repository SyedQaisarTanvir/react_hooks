import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1, showText: state.showText };
      break;
    case "ShowText":
      return { count: state.count, showText: !state.showText };
      break;
    default:
      return state;
  }
};

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  return (
    <>
      <h1>{state.count}</h1>
      <button
        type="submit"
        onClick={() => {
          dispatch({ type: "Increment" });
          dispatch({ type: "ShowText" });
        }}
      >
        Click Here...
      </button>
      {state.showText && <p>This is a text</p>}
    </>
  );
}

export default UseReducer;
