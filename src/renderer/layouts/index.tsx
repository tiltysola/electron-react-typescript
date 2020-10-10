import React, { useState } from 'react'
import { HashRouter, NavLink } from 'react-router-dom'
import useInterval from '@use-it/interval'
// import _ from 'lodash'

import Router from './router'

import './style.less'

const Index = () => {
  const [hash, setHash] = useState<any>(window.location.hash)

  useInterval(() => {
    setHash(() => window.location.hash)
  }, 100)

  return (
    <HashRouter>
      <div id="layout">
        <div className="layout-header">
          <div className="clearfix" />
          <span className="slg">Now you are at: {hash}</span>
        </div>
        <div className="layout-content">
          <div className="clearfix" />
          <Router />
        </div>
        <div className="layout-footer">
          <div className="clearfix" />
          <div className="nav">
            <NavLink to="/welcome">Index</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
        </div>
      </div>
    </HashRouter>
  )
}

export default Index
