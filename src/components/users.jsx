import { AppUseContext } from "../context";
import { User } from "./user";

export const Users = () => {
  const { state } = AppUseContext();
  console.log(state);
  return (
    <div>
      {state.users.map((user) => {
        return (
          <User
            key={user.id}
            name={user.name}
            department={user.department}
            salary={user.salary}
            id={user.id}
          />
        );
      })}
    </div>
  );
};
