import React from 'react'
import { openExternal } from 'common/utils'

import './style.less'

const About = () => {
  return (
    <div id="about">
      <h1 className="title">Electron RT Boilerplate</h1>
      <span>It seems you entered the about page.</span>
      <p>Author: YoumuKonpaku</p>
      <p>Website: <a className="link" href="#" onClick={() => { openExternal('https://youmukonpaku.com') }}>https://youmukonpaku.com</a></p>
    </div>
  )
}

export default About
