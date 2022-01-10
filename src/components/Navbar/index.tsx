import React from 'react';
import { Link } from 'react-router-dom';
import './style.less';

interface NavbarProps {
  loggedIn: boolean
}

const Navbar: React.FC<NavbarProps> = ({ loggedIn }) => (
  <div className="navbar">
    <span className="navbar-logo">ACM Store</span>

    <div className="navbar-links">
      <a href="/">home</a>
      {!loggedIn && <Link to="/login">login</Link>}
      {loggedIn && <Link to="/logout">logout</Link>}
    </div>
  </div>
);

export default Navbar;
