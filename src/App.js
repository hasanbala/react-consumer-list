import React, { Component } from "react";
import AddUser from "./forms/AddUser";
import Navbar from "./layout/Navbar";
import Users from "./component/Users";
import notFound from "./static/notFound";
import UpdateUser from "./forms/UpdateUser";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
      <Router>
        <div>
          <Navbar title="user app" />
          {/* <Users deleteUser={this.deleteUser} users={users} /> */}
          <Switch>
            <Route exact path="/" component={Users} />
            <Route exact path="/add" component={AddUser} />
            <Route exact path="/edit/:id" component={UpdateUser} />
            <Route component={notFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
