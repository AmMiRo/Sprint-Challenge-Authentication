import React, { useState } from "react";
import axios from "axios";
import React, { useState } from "react";
import axios from "axios";

const initialCredentials = {
  username: "",
  password: ""
};

const Login = props => {
  const [credentials, setCredentials] = useState(initialCredentials);

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3300/api/auth/login", credentials)
      .then(res => {
        console.log("registration response", res);
        window.localStorage.setItem("token", res.data.token);
        props.history.push(`/jokes`);
      })
      .catch(err => console.log("registration error", err));
    setCredentials(initialCredentials);
  };

  return (
    <div>
      <h1>Log in for jokes!</h1>
      <form onSubmit={login}>
        <label>
          Username
          <input
            name="username"
            type="text"
            placeholder="username"
            value={credentials.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            placeholder="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" onClick={login}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
