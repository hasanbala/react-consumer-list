import { useEffect } from "react";
import { AppUseContext } from "../context";
import { Forms } from "../components";
import alertify from "alertifyjs";
import "../styles/addUser.css";

export const UpdateUser = (props) => {
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

  useEffect(() => {
    (async function () {
      const { id } = props.match.params;
      const response = await fetch(`http://localhost:3002/users/${id}`);
      const data = await response.json();
      const { name, department, salary } = await data;
      setName(name);
      setDepartment(department);
      setSalary(salary);
    })();
  }, [props.match.params, setDepartment, setName, setSalary]);

  const updateUsers = async (e) => {
    e.preventDefault();
    const { id } = props.match.params;
    const newUser = {
      name,
      department,
      salary,
    };
    const response = await fetch(`http://localhost:3002/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(newUser),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const data = await response.json();
    await dispatch({ type: "UPDATE_USER", payload: data });
    await alertify.success("Users Updated");
    await props.history.push("/");
  };

  return (
    <Forms
      title={"Update User"}
      user={updateUsers}
      changeName={changeName}
      changeDepartment={changeDepartment}
      changeSalary={changeSalary}
      name={name}
      department={department}
      salary={salary}
      button={"UPDATE"}
    />
  );
};
