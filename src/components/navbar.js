import React, { useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const nav = useNavigate();
  const auth = getAuth();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      nav('/');
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <div>
      <div className="hamburger-icon" onClick={toggleMenu}>
        &#9776;
      </div>

      <ul className={`navbar ${menuVisible ? 'active' : ''}`}>
        {auth.currentUser ? (
          <li className="nav-item" onClick={handleLogout}>
            <Link to="#">Log Out</Link>
          </li>
        ) : (
          <li className="nav-item">
            <Link to="/login">Login</Link>
          </li>
        )}
        <li className="nav-item">
          <Link to="/favorites">Favorites</Link>
        </li>
        {auth.currentUser ? (
          <li className="nav-item">
            <Link to="/upload">Upload</Link>
          </li>
        ) : null}
        <li className="nav-item">
          <Link to="/articles">Articles</Link>
        </li>
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
