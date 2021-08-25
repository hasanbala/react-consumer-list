import React, { Component } from "react";
import UserConsumer from "../context";
import axios from "axios";

class UpdateUser extends Component {
  state = {
    name: "",
    department: "",
    salary: "",
    error: false,
  };

  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentDidMount = async () => {
    const { id } = this.props.match.params;
    // deleteUser(id);
    const response = await axios.get(`http://localhost:3002/users/${id}`);

    const { name, department, salary } = response.data;

    this.setState({
      name,
      department,
      salary,
    });
  };

  validateForm = () => {
    const { name, salary, department } = this.state;
    if (name === "" || salary === "" || department === "") {
      return false;
    }
    return true;
  };

  updateUser = async (dispatch, e) => {
    e.preventDefault();

    const { id } = this.props.match.params;
    const { name, department, salary } = this.state;

    const updatedUser = {
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

    const response = await axios.put(
      `http://localhost:3002/users/${id}`,
      updatedUser
    );

    dispatch({ type: "UPDATE_USER", payload: response.data });

    this.setState({
      name: "",
      department: "",
      salary: "",
    });

    this.props.history.push("/");
  };

  render() {
    // console.log(this.props.match.params.id);
    const { name, department, salary, error } = this.state;
    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;

          return (
            <div className="container col-md-6 mb-4">
              <div className="card">
                <div className="card-header">
                  <h4>Modifiy a user</h4>
                </div>
                <div className="card-body">
                  {error ? (
                    <div className="alert alert-danger">
                      lütfen bilgilerinizi kontrol ediniz
                    </div>
                  ) : null}
                  <form onSubmit={this.updateUser.bind(this, dispatch)}>
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
                    <button className="btn btn-danger btn-block" type="submit">
                      Change
                    </button>
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default UpdateUser;
