import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/authedUser";
import { Navigate } from "react-router-dom";
import  {users} from "../utils/_DATA";

function LoginPage({ dispatch, isAuthenticated }) {
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
    return <Navigate to="/home" />;
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

function mapStateToProps({  authedUser }) {
  return { isAuthenticated: authedUser !== null };
}

export default connect(mapStateToProps)(LoginPage);

