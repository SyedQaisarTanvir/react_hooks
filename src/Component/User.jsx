import React from "react";
import { useContext } from "react";
import { AppContext } from "../Hooks/UseContext";

function User() {
  const { name } = useContext(AppContext);
  return <p>UserName: {name}</p>;
}

export default User;
