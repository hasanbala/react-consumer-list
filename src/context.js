import React, { Component } from "react";

const UserContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => action.payload !== user.id),
      };
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

export class UserProvider extends Component {
  state = {
    users: [
      {
        id: "unique-1",
        name: "john rambo",
        salary: "500",
        department: "war intelligience",
      },
      {
        id: "unique-2",
        name: "slyvia xx",
        salary: "5000",
        department: "art design",
      },
      {
        id: "unique-3",
        name: "granada da",
        salary: "30000",
        department: "classified",
      },
    ],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };
  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;
