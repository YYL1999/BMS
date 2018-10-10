import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Login from './routes/Login'
import Manage from './routes/Manage'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path='/manage' component={Manage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
