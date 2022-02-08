import { Component } from "react";
import { UserConsumer } from "../context";
import "../style/addUser.css";

export class UpdateUser extends Component {
  state = {
    name: "",
    department: "",
    salary: "",
  };

  componentDidMount = async () => {
    const { id } = this.props.match.params;
    const response = await fetch(`http://localhost:3002/users/${id}`);
    const data = await response.json();
    const { name, department, salary } = data;
    this.setState({
      name,
      department,
      salary,
    });
  };

  inputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  updateUsers = async (dispatch, e) => {
    const { name, department, salary } = this.state;
    const { id } = this.props.match.params;
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
    dispatch({ type: "UPDATE_USER", payload: data.data });
    this.props.history.push("/");
    console.log("lslslld");
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
              <div className="adder-head" onClick={this.isVisible}>
                <b>
                  <h2>Update User</h2>
                </b>
              </div>
              <div className="adder-body">
                <form onSubmit={this.updateUsers.bind(this, dispatch)}>
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
                    Update
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
