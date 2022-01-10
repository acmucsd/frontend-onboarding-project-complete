import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import TextBox from '../../components/TextBox';
import { pathLinks } from '../../pathLinks';
import './style.less';

const CreateAccount: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <>
      <Navbar />
      <div className="createAccount">
        <p className="createAccount-description">
          Join the world’s largest store. Or <Link to={pathLinks.login}> login</Link> if you’re already part of our community.
        </p>
        <TextBox inputType="text" value={username} label="username" onChange={(t) => setUsername(t)} />
        <TextBox inputType="password" value={password} label="password" onChange={(t) => setPassword(t)} />
        <TextBox inputType="password" value={confirmPassword} label="confirm password" onChange={(t) => setConfirmPassword(t)} />
        <Button text="Create Account" onClick={() => {}} />
      </div>
    </>
  );
};

export default CreateAccount;
