import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import CreateAccount from './pages/CreateAccount';
import Home from './pages/Home';
import Login from './pages/Login';
import { pathLinks } from './pathLinks';

function Paths() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={pathLinks.home} component={Home} />
        <Route path={pathLinks.login} component={Login} />
        <Route path={pathLinks.createAccount} component={CreateAccount} />
      </Switch>
    </BrowserRouter>
  );
}

export default Paths;
