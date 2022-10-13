import React, { useState, useMemo } from "react";

function UseMemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  const onChange = (event) => {
    setNumber(event.target.value);
  };
  return (
    <>
      <input type="number" placeholder="Enter Number..." onChange={onChange} />
      <button type="submit" onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyle}>{doubleNumber}</div>
    </>
  );
}

function slowFunction(num) {
  for (let i = 0; i < 1000000; i++) {}
  return num * 2;
}

export default UseMemo;
