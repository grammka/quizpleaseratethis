import React from 'react'
import cx from 'classnames'
import { Link } from 'react-router'

import CSSModules from 'react-css-modules'
import style from './style'


export default CSSModules((props) => {
  const { children, styles, green, red, blue, fw, fullWidth, h, height, link, ...rest } = props

  const styleName = cx('button', `h${ h || height || 30 }`, {
    'green': green,
    'red': red,
    'blue': blue,
    'orange': !green && !red && !blue,
    'fullWidth': fw || fullWidth
  })


  if (!link) {
    return <button { ...rest } styleName={ styleName }>{ children }</button>
  } else {
    return <Link { ...rest } styleName={ styleName } to={link}>{ children }</Link>
  }
}, style, { allowMultiple: true })
