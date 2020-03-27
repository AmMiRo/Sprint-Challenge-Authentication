import React, { useState } from "react";
import axios from "axios";

const initialCredentials = {
  username: "",
  password: ""
};

const Registration = props => {
  const [credentials, setCredentials] = useState(initialCredentials);

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const register = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3300/api/auth/register", credentials)
      .then(res => {
        console.log("registration response", res);
        props.history.push(`/`);
      })
      .catch(err => console.log("registration error", err));
    setCredentials(initialCredentials);
  };

  return (
    <div>
      <h1>Register for jokes!</h1>
      <form onSubmit={register}>
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
        <button type="submit" onClick={register}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Registration;
