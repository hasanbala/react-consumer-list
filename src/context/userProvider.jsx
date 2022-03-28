import { useEffect, useReducer, createContext, useContext } from "react";
import { useFormHook } from "../hooks";
import { reducer } from "../reducers";

const User = createContext(null);
export const AppUseContext = () => useContext(User);

const initialState = { users: [] };
const initialFormValues = { name: "", department: "", salary: "" };

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [form, setForm] = useFormHook(initialFormValues);

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
    form,
    setForm,
    initialFormValues,
  };
  return <User.Provider value={contextValue}>{children}</User.Provider>;
};
