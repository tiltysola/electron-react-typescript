import React from 'react';

import { close, minimize } from 'common/utils';

import './style.less';

const TitleBar = () => {
  return (
    <div className="title-bar">
      <div className="drag-able">
        <div className="title">Electron RT Boilerplate</div>
      </div>
      <ul className="actions">
        <li onClick={() => { minimize(); }}>
          <i className="iconfont icon-minus" />
        </li>
        <li className="close" onClick={() => { close(); }}>
          <i className="iconfont icon-close" />
        </li>
      </ul>
    </div>
  );
};

export default TitleBar;
