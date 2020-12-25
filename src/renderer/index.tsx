import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import Layout from './components/layouts';

import './style.less';
import 'static/font_2264865_7yljfzuo1li/iconfont.css';

ReactDOM.render(
  <HashRouter>
    <Route path="/" component={Layout} />
  </HashRouter>,
  document.getElementById('app'),
);
