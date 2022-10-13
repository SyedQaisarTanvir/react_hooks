import React, { useState, useTransition } from "react";

function UseTransition() {
  const [count, setCount] = useState(0);
  const [showCount, setShowCount] = useState(false);
  const [isPending, startTransition] = useTransition();
  const onClick = () => {
    startTransition(() => {
      setShowCount((prev) => !prev);
    });
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <>
      {isPending && <h2>Loading...</h2>}
      <button onClick={onClick}>Click Me</button>
      {showCount && <h3>{count}</h3>}
    </>
  );
}

export default UseTransition;
