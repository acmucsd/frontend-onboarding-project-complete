import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { loginUser } from '../../api';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import TextBox from '../../components/TextBox';
import { GlobalContext } from '../../contexts/GlobalContext';
import { pathLinks } from '../../pathLinks';
import './style.less';

const Login: React.FC = () => {
  const history = useHistory();
  const { apiUrl, setUser } = useContext(GlobalContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Navbar title="Login" />
      <div className="login">
        <p className="login-description">
          Welcome back to the world’s largest store. Or <Link to={pathLinks.createAccount}>create an account if you need one.</Link>
        </p>
        <TextBox inputType="text" value={username} label="username" onChange={(t) => setUsername(t)} />
        <TextBox inputType="password" value={password} label="password" onChange={(t) => setPassword(t)} />
        <Button
          text="Login"
          onClick={async () => {
            const user = await loginUser(apiUrl, username, password);
            setUser(user);
            history.push(pathLinks.home);
          }}
        />
      </div>
    </>
  );
};

export default Login;
