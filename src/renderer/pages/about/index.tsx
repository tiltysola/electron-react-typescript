import React from 'react'
import { openExternal } from 'common/util'

import './style.less'

const About = () => {
  return (
    <div id="about">
      <h1 className="title">Electron RT Script</h1>
      <span>Tt seems you entered the about page.</span>
      <p>Author: YoumuKonpaku</p>
      <p>Website: <a href="#" onClick={() => { openExternal('https://youmukonpaku.com') }}>https://youmukonpaku.com</a></p>
    </div>
  )
}

export default About
