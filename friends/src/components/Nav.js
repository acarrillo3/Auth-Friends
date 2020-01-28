import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <nav>
        <Link exact="true" to="/">
          Home
        </Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
};

export default Nav;
