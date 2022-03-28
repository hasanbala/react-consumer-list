import { useEffect } from "react";
import { AppUseContext } from "../context";
import { Forms } from "../components";
import { useParams } from "react-router-dom";
import alertify from "alertifyjs";
import "../styles/addUser.css";

export const UpdateUser = (props) => {
  const { dispatch, form, setForm } = AppUseContext();
  const { id } = useParams();

  useEffect(() => {
    (async function () {
      const response = await fetch(`http://localhost:3002/users/${id}`);
      const data = await response.json();
      const { name, department, salary } = await data;
      setForm({ name, department, salary });
    })();
  }, []);

  const updateUsers = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3002/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(form),
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
      changeForm={setForm}
      form={form}
      button={"UPDATE"}
    />
  );
};
