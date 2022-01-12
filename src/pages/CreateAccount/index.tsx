import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { createAccount } from '../../api';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import TextBox from '../../components/TextBox';
import { GlobalContext } from '../../contexts/GlobalContext';
import { pathLinks } from '../../pathLinks';
import './style.less';

const CreateAccount: React.FC = () => {
  const { apiUrl, setUser } = useContext(GlobalContext);

  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <>
      <Navbar title="Create an Account" />
      <div className="createAccount">
        <p className="createAccount-description">
          Join the world’s largest store. Or <Link to={pathLinks.login}> login</Link> if you’re already part of our community.
        </p>
        <TextBox inputType="text" value={username} label="username" onChange={(t) => setUsername(t)} />
        <TextBox inputType="password" value={password} label="password" onChange={(t) => setPassword(t)} />
        <TextBox inputType="password" value={confirmPassword} label="confirm password" onChange={(t) => setConfirmPassword(t)} />
        <Button
          text="Create Account"
          onClick={async () => {
            const user = await createAccount(apiUrl, username, password);
            setUser(user);
            history.push(pathLinks.home);
          }}
        />
      </div>
    </>
  );
};

export default CreateAccount;
