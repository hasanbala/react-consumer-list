import React, { Component } from "react";
import PropTypes from "prop-types";
import UserConsumer from "../context";

class User extends Component {
  //   static defaultProps = {
  //     name: "unknown",
  //     department: "unknown",
  //     salary: "unknown",
  //   };

  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       test: "test",
  //     };
  //   }

  state = {
    test: "test",
    isVisible: false,
  };

  onClickEvent = (e) => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  ondeleteUser = (dispatch, e) => {
    const { id } = this.props;
    // deleteUser(id);
    dispatch({ type: "DELETE_USER", payload: id });
  };

  render() {
    const { name, department, salary } = this.props;
    const { test } = this.state;
    const { isVisible } = this.state;

    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="container col-md-6 mb-4">
              <div
                className="card"
                style={
                  isVisible
                    ? { backgroundColor: "#FBDBC1", color: "#000" }
                    : null
                }
              >
                <div className="card-header d-flex justify-content-between">
                  <h4
                    className="d-inline"
                    onClick={this.onClickEvent}
                    style={{ cursor: "pointer" }}
                  >
                    {name}
                  </h4>
                  <i
                    onClick={this.ondeleteUser.bind(this, dispatch)}
                    className="far fa-trash-alt"
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
                {isVisible ? (
                  <div
                    className="card-body"
                    style={{ backgroundColor: "#FDF1E7", color: "#000" }}
                  >
                    <p className="card-text">department: {department}</p>
                    <p className="card-text">salary: {salary}</p>
                    <p className="card-text">test: {test}</p>
                  </div>
                ) : null}
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
User.propTypes = {
  name: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  //   deleteUser: PropTypes.func.isRequired,
};
User.defaultProps = {
  name: "unknown",
  department: "unknown",
  salary: "unknown",
};

export default User;
