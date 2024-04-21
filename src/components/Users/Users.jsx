import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <h2 className="text-4xl font-bold text-center">
        This is users {users.length}
      </h2>
      <div className="grid grid-cols-3 gap-5 mx-5 mt-5">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
