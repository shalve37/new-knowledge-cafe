import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
const Header = ({ user }) => {
  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? "red" : "black",
    fontWeight: isActive ? "bold" : "normal",
  });
  return (
    <div className="flex justify-between items-center p-2">
      <h1 className="md:text-3xl text-2xl font-bold ">Knowledge Cafe</h1>
      <NavLink style={navLinkStyle} to={"/"}>
        Home
      </NavLink>
      <NavLink style={navLinkStyle} to={"/users"}>
        Users
      </NavLink>
      <NavLink style={navLinkStyle} to={"/login"}>
        Login
      </NavLink>
      {user?.photoURL && (
        <img className="w-12 pt-1 rounded-full" src={user.photoURL} alt="" />
      )}
    </div>
  );
};
Header.propTypes = {
  user: PropTypes.object,
};
export default Header;
