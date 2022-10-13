import React, { useCallback, useState } from "react";
import List from "../Component/List";

function UseCallback() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  const onChange = (event) => {
    setNumber(parseInt(event.target.value));
  };
  return (
    <div className={theme}>
      <input value={number} onChange={onChange} />
      <button type="submit" onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <List getItems={getItems} />
    </div>
  );
}

export default UseCallback;
