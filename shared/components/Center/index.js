import React from 'react'

import CSSModules from 'react-css-modules'
import style from './style'


const Center = CSSModules((props) => (
  <div styleName="container">{ props.children }</div>
), style)


export default Center
