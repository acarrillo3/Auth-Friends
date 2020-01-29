import React, { useState } from "react";
import axios from "axios";

const Login = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [userCreds, setUserCreds] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setUserCreds({ ...userCreds, [e.target.name]: e.target.value });
  };

  const login = e => {
    e.preventDefault();
    // Saving token to local storage
    axios
      .post("http://localhost:5000/api/login", userCreds)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friends");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={e => {
          login(e);
        }}
      >
        <label htmlFor="username">
          UserName:{" "}
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            onChange={handleChange}
            value={userCreds.username}
          />
        </label>
        <label htmlFor="password">
          Password:{" "}
          <input
            type="text"
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
            value={userCreds.password}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
