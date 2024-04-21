import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, email, username } = user;
  return (
    <div className="text-2xl font-semibold text-center mt-10">
      <h2>{name}</h2>
      <h2>{email}</h2>
      <h2>{username}</h2>
    </div>
  );
};

export default UserDetails;
