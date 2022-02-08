import React, { Component } from "react";

const User = React.createContext();

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
    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          action.payload.id === user.id ? action.payload : user
        ),
      };
    default:
      return state;
  }
};

export class UserProvider extends Component {
  state = {
    users: [],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };

  componentDidMount = async () => {
    const response = await fetch("http://localhost:3002/users");
    const data = await response.json();
    this.setState({
      users: data,
    });
  };

  render() {
    return (
      <User.Provider value={this.state}>{this.props.children}</User.Provider>
    );
  }
}
export const UserConsumer = User.Consumer;
