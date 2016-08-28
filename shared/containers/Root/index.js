import React from 'react'
import isMobile from 'isMobile'
import actions from 'core/actions'
import { Notifications } from 'react-notify-me'


export default class Root extends React.Component {
  componentWillMount() {
    actions.users.getCurrent()
  }

  componentDidMount() {
    console.debug('actions: ', actions)

    if (!isMobile) {
      document.body.className = 'not-mobile'
    }
  }

  render() {
    return (
      <div>
        { this.props.children }
        <Notifications config={{ autoDismiss: 2000, position: 'bottomRight' }} />
      </div>
    )
  }
}
