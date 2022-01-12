import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../contexts/GlobalContext';
import { pathLinks } from '../../pathLinks';

import TextBox from '../TextBox';
import './style.less';

interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  const { loggedIn, logout, apiUrl, setApiUrl } = useContext(GlobalContext);

  return (
    <>
      <div className="navbar">
        <span className="navbar-logo">{title}</span>

        <div className="navbar-links">
          <Link to="/">home</Link>
          {!loggedIn && <Link to={pathLinks.login}>login</Link>}
          {loggedIn && <Link to={pathLinks.createItem}>create item</Link>}
          {loggedIn && <Link to={pathLinks.orders}>your orders</Link>}
          {loggedIn && (
            // I'm lazy here oop
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                logout();
              }}
            >
              logout
            </a>
          )}
        </div>
      </div>
      <div className="textBoxContainer">
        <TextBox label="api url" value={apiUrl} onChange={setApiUrl} inputType="text" />
      </div>
    </>
  );
};

export default Navbar;
