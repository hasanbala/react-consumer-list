import React, { useEffect, useReducer, useState } from "react";
import { reducer } from "../reducers";

const User = React.createContext(null);
export const AppUseContext = () => React.useContext(User);
const initialState = { users: [] };

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");

  useEffect(() => {
    (async function () {
      const response = await fetch("http://localhost:3002/users");
      const data = await response.json();
      dispatch({ type: "LOAD_USER", payload: data });
    })();
  }, []);

  const contextValue = {
    state,
    dispatch,
    name,
    setName,
    department,
    setDepartment,
    salary,
    setSalary,
  };

  return <User.Provider value={contextValue}>{children}</User.Provider>;
};
export const UserConsumer = User.Consumer;
