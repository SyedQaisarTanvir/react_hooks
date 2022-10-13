import React, { useState } from "react";

function UseState() {
  const [inputValue, setInputValue] = useState("Qaisar");
  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <input placeholder="Enter Your text ....." onChange={onChange} />
      {inputValue}
    </>
  );
}

export default UseState;
