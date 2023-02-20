import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/authedUser";
import { Navigate } from "react-router-dom";
import { users } from "../utils/_DATA";

function LoginPage({ dispatch, isAuthenticated }) {
  const [selectedUser, setSelectedUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedUser) {
      dispatch(loginUser(selectedUser));
    } else {
      alert("Please select a user");
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
          <label htmlFor="user-select">Select a user:</label>
          <select id="user-select" value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
            <option value="">Select user</option>
            {Object.values(users).map((user) => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
        </div>
        <button type="submit" disabled={!selectedUser}>
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

