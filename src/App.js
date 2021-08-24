import React, { Component } from "react";
import AddUser from "./component/AddUser";
import Navbar from "./component/Navbar";
import Users from "./component/Users";
// import Users from "./component/Users";

class App extends Component {
  // deleteUser = (id) => {
  //   this.setState({
  //     users: this.state.users.filter((user) => id !== user.id),
  //   });
  // };
  render() {
    // const { users } = this.state;
    return (
      <div>
        <Navbar title="user app" />
        {/* <Users deleteUser={this.deleteUser} users={users} /> */}
        <AddUser />
        <Users />
      </div>
    );
  }
}

export default App;
