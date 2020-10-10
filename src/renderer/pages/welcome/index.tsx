import React from 'react'
import { openExternal } from 'common/util'

import './style.less'

const Welcome = () => {
  return (
    <div id="welcome">
      <h1 className="title">Electron RT Script</h1>
      <span>This is a template for electron + react + typescript.</span>
      <div className="links">
        <p>
          <a href="#" onClick={() => { openExternal('https://www.electronjs.org/') }}>Electron</a> |
          <a href="#" onClick={() => { openExternal('https://webpack.electron.build/') }}>Electron-Webpack</a>
        </p>
        <p>
          <a href="#" onClick={() => { openExternal('https://react.docschina.org/') }}>React</a> |
          <a href="#" onClick={() => { openExternal('https://reactrouter.com/') }}>React-Router</a>
        </p>
        <p>
          <a href="#" onClick={() => { openExternal('https://www.typescriptlang.org/') }}>Typescript</a> |
          <a onClick={() => { openExternal('http://lesscss.org/') }}>Less</a>
        </p>
        <p>
          <a href="#" onClick={() => { openExternal('https://eslint.org/') }}>Eslint</a> |
          <a href="#" onClick={() => { openExternal('https://www.npmjs.com/package/eslint-config-ali') }}>Eslint-Config-Ali</a>
        </p>
      </div>
    </div>
  )
}

export default Welcome
