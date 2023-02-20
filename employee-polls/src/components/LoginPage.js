import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/authedUser";
import { Navigate } from "react-router-dom";
import HomePage from "./HomePage";

function LoginPage({ dispatch, isAuthenticated }) {
  let users = {
    sarahedo: {
      id: "sarahedo",
      password: "password123",
      name: "Sarah Edo",
      avatarURL: null,
      answers: {
        "8xf0y6ziyjabvozdd253nd": "optionOne",
        "6ni6ok3ym7mf1p33lnez": "optionOne",
        am8ehyc8byjqgar0jgpub9: "optionTwo",
        loxhs1bqm25b708cmbf3g: "optionTwo",
      },
      questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
    },
  };

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

  if (isAuthenticated) {
    return <Navigate to={HomePage} />;
  }

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

function mapStateToProps({ users, authedUser }) {
  return { users, isAuthenticated: authedUser !== null };
}

export default connect(mapStateToProps)(LoginPage);
