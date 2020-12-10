import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import Layout from './layouts';

import './style.less';

ReactDOM.render(
  <HashRouter>
    <Route path="/" component={Layout} />
  </HashRouter>,
  document.getElementById('app'),
);
