import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const style = {
    backgroundColor: 'red',
    padding: '20px',
    margin: '20%',
  }
  return (
    <div style={style}>
    <h1 className="center">Welcome to CRUD app</h1>
      <NavLink className="btn btn-primary" to="/userform">
        User form
      </NavLink>
      <NavLink to="/users" className="btn btn-secondary">
        Users-Lists
      </NavLink>
    </div>
  );
};

export default Home;
