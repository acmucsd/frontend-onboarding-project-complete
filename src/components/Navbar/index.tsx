import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../contexts/GlobalContext';
import { pathLinks } from '../../pathLinks';
import './style.less';

const Navbar: React.FC = () => {
  const { loggedIn } = useContext(GlobalContext);
  return (
    <div className="navbar">
      <span className="navbar-logo">ACM Store</span>

      <div className="navbar-links">
        <a href="/">home</a>
        {!loggedIn && <Link to={pathLinks.login}>login</Link>}
        {loggedIn && <Link to="/logout">logout</Link>}
      </div>
    </div>
  );
};

export default Navbar;
