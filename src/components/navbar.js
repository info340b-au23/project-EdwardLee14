import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <ul className="navbar">
      <li className="nav-item"><Link to="/login">Login</Link></li>
      <li className="nav-item"><Link to="/favorites">Favorites</Link></li>
      <li className="nav-item"><Link to="/upload">Upload</Link></li>
      <li className="nav-item"><Link to="/articles">Articles</Link></li>
      <li className="nav-item"><Link to="/">Home</Link></li>
    </ul>
  );
};

export default Navbar;
