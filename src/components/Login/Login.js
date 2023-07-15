import React from 'react';
import './Login.css';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { useState } from 'react';

const Login = () => {
  const [username, setUsernane] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    console.log(username, password);
  };

  const onChangeUsername = event => {
    setUsernane(event.target.value);
  };

  const onChangePassword = event => {
    setPassword(event.target.value);
  };

  const isBtnDisabled = () => {
    if (!username || !password) {
      return true;
    }
    return false;
  };
  return (
    <div className="login-form">
      <h2>Login</h2>
      <div className="my-3 login-control">
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          required={true}
          value={username}
          onChange={onChangeUsername}
        />
      </div>
      <div className="my-3 login-control">
        <TextField
          id="outlined-basic"
          label="Password"
          type="password"
          variant="outlined"
          autoComplete="current-password"
          required={true}
          value={password}
          onChange={onChangePassword}
        />
      </div>
      <Button variant="outlined" disabled={isBtnDisabled()} onClick={login}>
        Login
      </Button>
    </div>
  );
};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
