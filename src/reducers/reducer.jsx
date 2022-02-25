export const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_USER":
      return {
        users: [...action.payload],
      };
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
