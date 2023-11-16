import React from 'react';

const Navbar = () => {
  return (
    <ul className="navbar">
      <li className="nav-item"><a href="login.html">Login</a></li>
      <li className="nav-item"><a href="favorites.html">Favorites</a></li>
      <li className="nav-item"><a href="submission.html">Upload</a></li>
      <li className="nav-item"><a href="articles.html">Articles</a></li>
      <li className="nav-item"><a href="index.html">Home</a></li>
    </ul>
  );
};

export default Navbar;
