import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Welcome from '../pages/welcome';
import About from '../pages/about';

const Router = () => {
  return (
    <Switch>
      <Redirect from="/" to="/welcome" exact />
      <Route path="/welcome" component={Welcome} exact />
      <Route path="/about" component={About} exact />
    </Switch>
  );
};

export default Router;
