import React, { createContext, useState } from "react";
import Login from "../Component/Login";
import User from "../Component/User";

export const AppContext = createContext(null);
function UseContext({children}) {
  const [name, setName] = useState("");
  return (
    <AppContext.Provider value={{ name, setName }}>
      {children}
    </AppContext.Provider>
  );
}
export default UseContext;
