import React, { useEffect, useLayoutEffect } from "react";

function UseLayoutEffect() {
  useEffect(() => {
    console.log("Hello");
  }, []);
  useLayoutEffect(() => {
    console.log("Hello World");
  }, []);
  return <h1>Hello</h1>;
}

export default UseLayoutEffect;
