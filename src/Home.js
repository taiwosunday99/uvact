import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <NavLink className="btn btn-primary" to="/userform">
        User form
      </NavLink>
      <NavLink to="/users" className="btn btn-secondary">
        Users
      </NavLink>
    </div>
  );
};

export default Home;
