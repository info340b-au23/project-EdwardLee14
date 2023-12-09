import React, { useState } from 'react';
import './css/styles.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './index';
import { NavLink, useNavigate, Link } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/")
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
  }

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
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            aria-label="Enter your password"
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <button type="submit" aria-label="Submit Login" onClick={onLogin}>Login</button>
        </form>
        <p>
          <Link to="/signup">No account? Sign up here.</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
