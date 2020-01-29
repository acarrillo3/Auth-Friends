import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <nav style={{display:'flex', justifyContent:'space-evenly'}}>
        <Link exact="true" to="/">
          Home
        </Link>
        <Link to="/login">Login</Link>
        <Link to='/friends'>Friends List</Link>
      </nav>
    </div>
  );
};

export default Nav;
