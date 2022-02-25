import { useState } from "react";
import { AppUseContext } from "../context";
import { Link } from "react-router-dom";
import alertify from "alertifyjs";
import "../styles/user.css";

export const User = (props) => {
  const [visible, setVisible] = useState(false);
  const { dispatch } = AppUseContext();
  const clickEvent = () => setVisible(!visible);

  const deleteUsers = async () => {
    const { id } = await props;
    await fetch(`http://localhost:3002/users/${id}`, {
      method: "DELETE",
      body: JSON.stringify(),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    await dispatch({ type: "DELETE_USER", payload: id });
    await alertify.warning("Users Deleted");
  };

  const { id, name, department, salary } = props;
  return (
    <div className="bodyer">
      <div className="blog-head">
        <div onClick={clickEvent}>
          <h2>{name}</h2>
        </div>
        <div>
          <i onClick={deleteUsers} className="fas fa-trash-alt"></i>
        </div>
      </div>
      {visible ? (
        <div className="blog-body">
          <p>
            Department : <b> {department} </b>
          </p>
          <p>
            Salary : <b> {salary} </b>
          </p>
          <Link
            className="navLink"
            to={`update/${id}`}
            style={{ color: "#fff", textDecoration: "none" }}
          >
            <b>Go to Update</b>
          </Link>
        </div>
      ) : null}
    </div>
  );
};
