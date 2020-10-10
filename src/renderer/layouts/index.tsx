import React from 'react'
import { HashRouter, NavLink } from 'react-router-dom'

import Router from './router'

import './style.less'

const Index = () => {
  return (
    <HashRouter>
      <div id="layout">
        <div className="layout-header">
          <div className="clearfix" />
          <span className="slg">Typescript, the best language for f2e!</span>
        </div>
        <div className="layout-content">
          <div className="clearfix" />
          <Router />
        </div>
        <div className="layout-footer">
          <div className="clearfix" />
          <div className="nav">
            <NavLink to="/">Index</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
        </div>
      </div>
    </HashRouter>
  )
}

export default Index
