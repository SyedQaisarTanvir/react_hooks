import React, { useImperativeHandle, useRef } from "react";

function UseImperativeHandle() {
  const inputRef = useRef(null);
  useImperativeHandle(inputRef, () => {
    return {
      alertMessage: () => {
        alert("Hello....");
      },
    };
  });
  const onChange = (event) => {
    inputRef.current.alertMessage();
  };
  return (
    <input
      type="text"
      ref={inputRef}
      placeholder="Enter text ..."
      onChange={onChange}
    ></input>
  );
}

export default UseImperativeHandle;
