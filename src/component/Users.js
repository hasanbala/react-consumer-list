import React, { Component } from "react";
import User from "./User";
// import PropTypes from "prop-types";
import UserConsumer from "../context";

class Users extends Component {
  render() {
    return (
      <UserConsumer>
        {(value) => {
          const { users } = value;
          return (
            <div>
              {users.map((user) => {
                return (
                  <User
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    department={user.department}
                    salary={user.salary}
                    //   deleteUser={deleteUser}
                  />
                );
              })}
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
// Users.propTypes = {
//   users: PropTypes.array.isRequired,
//   deleteUser: PropTypes.func.isRequired,
// };
export default Users;
