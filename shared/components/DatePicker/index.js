import React from 'react'
import ReactDatePicker from 'react-datepicker'

import CSSModules from 'react-css-modules'
import style from './style'


@CSSModules(style)
export default class DatePicker extends React.Component {
  constructor(props) {
    super()

    this.state = {
      value: props.initValue || null,
    }
  }

  handleChange = (value) => {
    const { valueLink } = this.props

    valueLink.set(value)

    this.setState({
      value
    })
  }
  
  render() {
    const { value } = this.state
    const { ...rest } = this.props
    
    
    return (
      <ReactDatePicker
        { ...rest }
        selected={value}
        placeholderText={'день / месяц / год'}
        onChange={ this.handleChange }
      />
    )
  }
}
