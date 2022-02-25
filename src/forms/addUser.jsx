// import { useState } from "react";
import { AppUseContext } from "../context";
import { Forms } from "../components";
import alertify from "alertifyjs";
import "../styles/addUser.css";

export const AddUser = (props) => {
  const {
    dispatch,
    name,
    setName,
    department,
    setDepartment,
    salary,
    setSalary,
  } = AppUseContext();

  const changeName = (e) => setName(e.target.value);
  const changeDepartment = (e) => setDepartment(e.target.value);
  const changeSalary = (e) => setSalary(e.target.value);

  const validateForm = () => {
    if (name === "" || salary === "" || department === "") {
      alertify.error("Please, fill in the all blanks with valid values !!");
      setName("");
      setDepartment("");
      setSalary("");
      return false;
    }
    return true;
  };

  const addUser = async (e) => {
    e.preventDefault();
    const newUser = {
      name,
      department,
      salary,
    };
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
    setName("");
    setDepartment("");
    setSalary("");
    alertify.success("Users Added");
    props.history.push("/");
  };

  return (
    <Forms
      title={"Add User"}
      user={addUser}
      changeName={changeName}
      changeDepartment={changeDepartment}
      changeSalary={changeSalary}
      name={name}
      department={department}
      salary={salary}
      button={"ADD"}
    />
  );
};
