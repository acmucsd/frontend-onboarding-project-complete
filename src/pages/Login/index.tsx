import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import TextBox from '../../components/TextBox';
import { pathLinks } from '../../pathLinks';
import './style.less';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Navbar />
      <div className="login">
        <p className="login-description">
          Welcome back to the world’s largest store. Or <Link to={pathLinks.createAccount}>create an account if you need one.</Link>
        </p>
        <TextBox inputType="text" value={username} label="username" onChange={(t) => setUsername(t)} />
        <TextBox inputType="password" value={password} label="password" onChange={(t) => setPassword(t)} />
        <Button text="Login" onClick={() => {}} />
      </div>
    </>
  );
};

export default Login;
