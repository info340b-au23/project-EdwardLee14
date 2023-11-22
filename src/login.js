import React from 'react';
import './Styles/styles.css'; 

const Login = () => {
  return (
    <div>
      <header>
        <ul className="navbar">
          <li className="nav-item"><a href="login.html">Login</a></li>
          <li className="nav-item"><a href="favorites.html">Favorites</a></li>
          <li className="nav-item"><a href="submission.html">Upload</a></li>
          <li className="nav-item"><a href="articles.html">Articles</a></li>
          <li className="nav-item"><a href="index.html">Home</a></li>
        </ul>
      </header>
      <div className="login-box">
        <h1>Login</h1>
        <form className="login-form">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
