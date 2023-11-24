import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      <div className="hamburger-icon" onClick={toggleMenu}>
        &#9776;
      </div>

      <ul className={`navbar ${menuVisible ? 'active' : ''}`}>
        <li className="nav-item"><Link to="/login">Login</Link></li>
        <li className="nav-item"><Link to="/favorites">Favorites</Link></li>
        <li className="nav-item"><Link to="/upload">Upload</Link></li>
        <li className="nav-item"><Link to="/articles">Articles</Link></li>
        <li className="nav-item"><Link to="/">Home</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
