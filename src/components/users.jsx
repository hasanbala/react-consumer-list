import { UserConsumer } from "../context";
import { User } from "./User";

export const Users = () => {
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
                  name={user.name}
                  department={user.department}
                  salary={user.salary}
                  id={user.id}
                />
              );
            })}
          </div>
        );
      }}
    </UserConsumer>
  );
};
