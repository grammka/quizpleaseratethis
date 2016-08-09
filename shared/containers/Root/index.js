import React from 'react'
import isMobile from 'isMobile'
import actions from 'core/actions'


export default class Root extends React.Component {
  componentDidMount() {
    console.debug('actions: ', actions)

    if (!isMobile) {
      document.body.className = 'not-mobile'
    }
  }

  render() {
    return (
      <div>{ this.props.children }</div>
    )
  }
}
