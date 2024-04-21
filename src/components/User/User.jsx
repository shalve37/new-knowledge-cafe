import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { name, email, id } = user;
  return (
    <div className="p-10 border-2 border-yellow-400 rounded-lg text-center">
      <h2>Name: {name}</h2>
      <h3>Email: {email}</h3>
      <Link to={`/users/${id}`}>
        <button className="btn mt-5">See details</button>
      </Link>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object,
};

export default User;
