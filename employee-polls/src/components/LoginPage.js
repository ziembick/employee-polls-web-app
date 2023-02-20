import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authedUser';

function LoginPage({ users, dispatch }) {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState('');

  const handleUserChange = (e) => {
    setUsername(e.target.value);
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
      alert('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="user-select">Select a user:</label>
          <select id="user-select" onChange={handleUserChange}>
            <option value="">Select a user...</option>
            {Object.keys(users).map((userId) => (
              <option key={userId} value={userId}>
                {users[userId].name}
              </option>
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

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps)(LoginPage);
