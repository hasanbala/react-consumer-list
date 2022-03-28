import { AppUseContext } from "../context";
import { useEffect } from "react";
import { Forms } from "../components";
import { useHistory } from "react-router-dom";
import alertify from "alertifyjs";
import "../styles/addUser.css";

export const AddUser = () => {
  const { dispatch, form, setForm, initialFormValues } = AppUseContext();
  const history = useHistory();

  useEffect(() => {
    setForm(initialFormValues);
  }, []);

  const validateForm = () => {
    if (form.name === "" || form.salary === "" || form.department === "") {
      alertify.error("Please, fill in the all blanks with valid values !!");
      setForm(initialFormValues);
      return false;
    }
    return true;
  };

  const addUser = async (e) => {
    e.preventDefault();
    const newUser = form;
    if (!validateForm()) {
      return;
    }
    const response = await fetch("http://localhost:3002/users", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const data = await response.json();

    await dispatch({ type: "ADD_USER", payload: data });
    setForm(initialFormValues);
    alertify.success("Users Added");
    history.push("/");
  };

  return (
    <Forms
      title={"Add User"}
      user={addUser}
      form={form}
      button={"ADD"}
      changeForm={setForm}
    />
  );
};
