import React, { useState } from "react";

const Login = () => {
  const [isLoading, setLoading] = useState(false);

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label htmlFor="username">
          UserName:{" "}
          <input type="text" name="username" placeholder="Enter username" />
        </label>
        <label htmlFor="password">
          Password:{" "}
          <input type="text" name="password" placeholder="Enter password" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;