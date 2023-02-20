import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/authedUser";
import { Navigate } from "react-router-dom";
import { users } from "../utils/_DATA";

function LoginPage({ dispatch, isAuthenticated }) {
  const [selectedUser, setSelectedUser] = useState("");
  const [password, setPassword] = useState("");

  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users[selectedUser];

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
          <label htmlFor="user-select">Select user:</label>
          <select id="user-select" value={selectedUser} onChange={handleUserChange}>
            <option value="" disabled>Select user</option>
            {Object.values(users).map(user => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
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
        <button type="submit" disabled={!selectedUser || !password}>
          Login
        </button>
      </form>
    </div>
  );
}

function mapStateToProps({ authedUser }) {
  return { isAuthenticated: authedUser !== null };
}

export default connect(mapStateToProps)(LoginPage);