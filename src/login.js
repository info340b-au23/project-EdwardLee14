import React from 'react';
import './css/styles.css';

const Login = () => {
  return (
    <div>
      <div className="login-box">
        <h1>Login</h1>
        <form className="login-form" aria-label="Login Form">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            required
            aria-label="Enter your username"
          />
          <br />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            aria-label="Enter your password"
          />
          <br />
          <button type="submit" aria-label="Submit Login">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
