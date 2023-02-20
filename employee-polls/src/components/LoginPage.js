import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/authedUser";
import { Redirect } from "react-router-dom";

function LoginPage({ users, dispatch }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = Object.values(users).find((u) => u.id === username);

    if (user && user.password === password) {
      dispatch(loginUser(user.id));
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username-input">Username:</label>
          <input
            type="text"
            id="username-input"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password-input">Password:</label>
          <input
            type="password"
            id="password-input"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" disabled={!username || !password}>
          Login
        </button>
      </form>
    </div>
  );
}

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps)(LoginPage);
