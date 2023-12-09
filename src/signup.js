import React, { useState } from 'react';
import './css/styles.css';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './index';

const SignUp = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, username, password);

      navigate('/login');
    } catch (error) {
      console.error('Error signing up:', error.message);

    }
  };

  return (
    <div>
      <div className="login-box">
        <h1>Sign Up</h1>
        <form className="login-form" onSubmit={onSubmit} aria-label="SignUp Form">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            aria-label="Enter your username"
          />
          <br />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-label="Enter your password"
          />
          <br />
          <button type="submit" aria-label="Submit SignUp">
            Sign Up!
          </button>
        </form>
        <br />
        <Link to="/login">Have an account? Login here.</Link>
      </div>
    </div>
  );
};

export default SignUp;
