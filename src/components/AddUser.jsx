import { Component } from "react";
import { UserConsumer } from "../context";
import "../style/addUser.css";

export class AddUser extends Component {
  state = {
    name: "",
    department: "",
    salary: "",
  };

  inputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validateForm = () => {
    const { name, salary, department } = this.state;
    if (name === "" || salary === "" || department === "") {
      return false;
    }
    return true;
  };

  addUser = async (dispatch, e) => {
    const { name, department, salary } = this.state;
    const newUser = {
      name,
      department,
      salary,
    };
    if (!this.validateForm()) {
      this.setState({
        error: true,
      });
      return;
    }
    const response = await fetch("http://localhost:3002/users", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const data = await response.json();

    dispatch({ type: "ADD_USER", payload: data.data });
    this.setState({
      name: "",
      department: "",
      salary: "",
    });
    this.props.history.push("/");
    e.preventDefault();
  };

  render() {
    const { name, department, salary } = this.state;
    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="adder">
              <div className="adder-head">
                <b>
                  <h2>Add User</h2>
                </b>
              </div>
              <div className="adder-body">
                <form onSubmit={this.addUser.bind(this, dispatch)}>
                  <div className="adder-body-div">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter a name"
                      value={name}
                      onChange={this.inputChange}
                    />
                  </div>
                  <div className="adder-body-div">
                    <label htmlFor="department">Department</label>
                    <input
                      type="text"
                      name="department"
                      id="department"
                      placeholder="Enter a department"
                      value={department}
                      onChange={this.inputChange}
                    />
                  </div>
                  <div className="adder-body-div">
                    <label htmlFor="salary">Salary</label>
                    <input
                      type="text"
                      name="salary"
                      id="salary"
                      placeholder="Enter a salary"
                      value={salary}
                      onChange={this.inputChange}
                    />
                  </div>
                  <button className="btn-hover color-3" type="submit">
                    Add
                  </button>
                </form>
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
