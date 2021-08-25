import axios from "axios";
import React, { Component } from "react";
import posed from "react-pose";
import UserConsumer from "../context";

// var uniqid = require("uniqid");

const Animation = posed.div({
  visible: {
    opacity: 1,
    applyAtStart: {
      display: "block",
    },
  },
  hidden: {
    opacity: 0,
    applyAtEnd: {
      display: "none",
    },
  },
});

class AddUser extends Component {
  state = {
    visible: false,
    name: "",
    department: "",
    salary: "",
  };

  changeVisible = (e) => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    // console.log(e.target);
    // console.log(e.target.name);
    // console.log([e.target.name]);
  };

  addNewUser = async (dispatch, e) => {
    e.preventDefault();
    const { name, department, salary } = this.state;

    const newUser = {
      // id: uniqid(),
      name,
      department,
      salary,
    };
    const response = await axios.post("http://localhost:3002/users", newUser);

    dispatch({ type: "ADD_USER", payload: response.data });

    this.setState({
      name: "",
      department: "",
      salary: "",
    });
  };

  //   changeName = (e) => {
  //     this.setState({
  //       name: e.target.value,
  //     });
  //   };

  //   changeSalary = (e) => {
  //     this.setState({
  //       salary: e.target.value,
  //     });
  //   };

  //   changeDepartment = (e) => {
  //     this.setState({
  //       department: e.target.value,
  //     });
  //   };

  render() {
    const { visible, name, department, salary } = this.state;
    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="container col-md-6 mb-4">
              <button
                className="btn btn-dark btn-block mb-2"
                onClick={this.changeVisible}
              >
                {visible ? "Hide Form" : "Show Form"}
              </button>
              <Animation pose={visible ? "visible" : "hidden"}>
                <div className="card">
                  <div className="card-header">
                    <h4>ADD A USER</h4>
                  </div>
                  <div className="card-body">
                    <form onSubmit={this.addNewUser.bind(this, dispatch)}>
                      <div className="form-group">
                        <label htmlFor="name">NAME</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="enter a name"
                          className="form-control"
                          value={name}
                          onChange={this.changeInput}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="department">DEPARTMENT</label>
                        <input
                          type="text"
                          name="department"
                          id="department"
                          placeholder="enter a department"
                          className="form-control"
                          value={department}
                          onChange={this.changeInput}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="salary">SALARY</label>
                        <input
                          type="text"
                          name="salary"
                          id="salary"
                          placeholder="enter a salary"
                          className="form-control"
                          value={salary}
                          onChange={this.changeInput}
                        />
                      </div>
                      <button
                        className="btn btn-danger btn-block"
                        type="submit"
                      >
                        ADD A USER
                      </button>
                    </form>
                  </div>
                </div>
              </Animation>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
export default AddUser;
