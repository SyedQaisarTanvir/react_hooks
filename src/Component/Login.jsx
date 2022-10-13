import React, { useContext } from "react";
import { AppContext } from "../Hooks/UseContext";

function Login() {
  const { setName } = useContext(AppContext);
  const onChange = (event) => {
    setName(event.target.value);
  };
  return (
    <input type="text" placeholder="Enter Your text ..." onChange={onChange} />
  );
}

export default Login;
