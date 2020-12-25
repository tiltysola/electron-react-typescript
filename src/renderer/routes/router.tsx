import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Welcome from 'renderer/pages/welcome';

const Router = () => {
  return (
    <Switch>
      <Redirect from="/" to="/welcome" exact />
      <Route path="/welcome" component={Welcome} exact />
    </Switch>
  );
};

export default Router;
