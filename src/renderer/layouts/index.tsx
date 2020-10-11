import React, { useState } from 'react'
import { HashRouter, NavLink } from 'react-router-dom'
import useInterval from '@use-it/interval'
import { remote } from 'electron'

import Router from '../routes/router'

import './style.less'

const isDev = process.env.NODE_ENV !== 'production'
const winContent = remote.getCurrentWindow()

const Index = () => {
  const [hash, setHash] = useState<any>(window.location.hash)

  useInterval(() => {
    setHash(() => window.location.hash)
  }, 100)

  const close = () => {
    if (isDev) {
      winContent.destroy()
    } else {
      winContent.close()
    }
  }

  return (
    <HashRouter>
      <div id="layout">
        <div className="layout-header">
          <div className="clearfix" />
          <h1 className="title">Electron RT Boilerplate</h1>
          <span className="slg">{hash}</span>
          <div className="control">
            <ul>
              <li className="close" onClick={() => { close() }}>
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
                  <path d="M816 816m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" />
                  <path d="M512 968a456 456 0 1 1 395.76-229.36 32 32 0 0 1-55.52-32 392 392 0 1 0-145.44 145.44 32 32 0 0 1 32 55.52A456 456 0 0 1 512 968z" />
                  <path d="M376 680a32 32 0 0 1-22.64-54.64L625.12 353.6a32 32 0 1 1 45.28 45.28L398.88 670.4A32 32 0 0 1 376 680z" />
                  <path d="M648 680a32 32 0 0 1-22.64-9.36L353.6 398.88a32 32 0 0 1 45.28-45.28L670.4 625.12A32 32 0 0 1 648 680z" />
                </svg>
              </li>
            </ul>
          </div>
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
