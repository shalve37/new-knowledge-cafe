import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

const Root = () => {
  const [user, setUser] = useState(null);
  const handleUserState = (loggedInUser) => {
    setUser(loggedInUser);
  };

  return (
    <div>
      <Header user={user} />
      <Outlet context={{ user, handleUserState }} />
    </div>
  );
};

export default Root;
