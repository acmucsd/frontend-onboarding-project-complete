import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { RequireLogin } from './contexts/GlobalContext';
import CreateAccount from './pages/CreateAccount';
import Home from './pages/Home';
import Login from './pages/Login';
import CreateItem from './pages/CreateItem';
import YourOrders from './pages/YourOrders';
import { pathLinks } from './pathLinks';

function Paths() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={pathLinks.home} component={Home} />
        <Route path={pathLinks.login} component={Login} />
        <Route path={pathLinks.createAccount} component={CreateAccount} />
        <RequireLogin><Route path={pathLinks.orders} component={YourOrders}/>
          <Route path={pathLinks.createItem} component={CreateItem}/>
        </RequireLogin>
      </Switch>
    </BrowserRouter>
  );
}

export default Paths;
