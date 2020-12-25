import React from 'react';
import { HashRouter } from 'react-router-dom';
import TitleBar from '../title-bar';

import Router from 'renderer/routes/router';

import './style.less';

const Layouts = () => {
  return (
    <HashRouter>
      <TitleBar />
      <div className="layout" style={{ marginTop: 28 }}>
        <div className="layout-content">
          <Router />
        </div>
      </div>
    </HashRouter>
  );
};

export default Layouts;
