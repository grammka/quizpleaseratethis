import React from 'react'
import { Input as ValueLinkInput, TextArea } from 'valuelink/tags'

import cx from 'classnames'
import CSSModules from 'react-css-modules'
import style from './style'


@CSSModules(style, { allowMultiple: true })
export default class Input extends React.Component {
  static defaultProps = {
    focusOnInit: false,
    multiline: false,
    disabled: false,
    required: false,
    error: false,
    type: 'text'
  }

  render() {
    const { className, valueLink, disabled, type, required, multiline, label, focusOnInit, rest } = this.props

    const height = this.props.h || this.props.height || 40
    const error = valueLink.error

    const containerStyleName = cx('root', `h${ height }`, {
      'disabled': disabled,
      'errored': error,
      'hidden': type === 'hidden'
    })

    
    const value = valueLink.value
    const valuePresent = value !== null && value !== undefined && value !== '' && !Number.isNaN(value)
    
    const inputStyleName = cx('input', {
      filled: valuePresent
    })

    const InputElement = React.createElement(multiline ? TextArea : ValueLinkInput, {
      ...rest,
      styleName: inputStyleName,
      valueLink,
      disabled,
      required,
      autoFocus: !!focusOnInit,
      type
    })


    return (
      <div>
        <div className={ className } styleName={ containerStyleName }>
          { InputElement }
          { !!label && <label styleName="label">{ label }</label> }
        </div>
      </div>
    )
  }
}
