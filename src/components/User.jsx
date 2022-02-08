import { Component } from "react";
import { Link } from "react-router-dom";
import { UserConsumer } from "../context";
import "../style/user.css";

export class User extends Component {
  state = {
    visible: false,
  };

  clickEvent = () => {
    this.setState({ visible: !this.state.visible });
  };

  deleteUsers = async (dispatch, _e) => {
    const { id } = this.props;
    await fetch(`http://localhost:3002/users/${id}`, {
      method: "DELETE",
      body: JSON.stringify(),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    dispatch({ type: "DELETE_USER", payload: id });
  };

  render() {
    const { id, name, department, salary } = this.props;
    const { visible } = this.state;
    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div
              className="bodyer"
              style={
                visible ? { backgroundColor: "#111", color: "#fff" } : null
              }
            >
              <div className="blog-head">
                <div onClick={this.clickEvent}>
                  <b>
                    <h2>{name}</h2>
                  </b>
                </div>
                <div>
                  <i
                    onClick={this.deleteUsers.bind(this, dispatch)}
                    className="fas fa-trash-alt"
                  ></i>
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
                  <Link className="navLink" to={`update/${id}`}>
                    <b>Go to Update</b>
                  </Link>
                </div>
              ) : null}
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
