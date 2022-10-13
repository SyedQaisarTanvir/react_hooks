import React, { useRef } from "react";

function UseRef() {
  const inputRef = useRef(null);
  const onClick = (event) => {
    inputRef.current.focus();
    console.log(inputRef.current.value);
  };
  return (
    <>
      <h1 className="name">Qaisar</h1>
      <input type="text" placeholder="Enter text ..." ref={inputRef} />
      <button type="submit" onClick={onClick}>
        Click Here..
      </button>
    </>
  );
}

export default UseRef;
