import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import routes from 'routes'
import store from 'core/store'
import actions from 'core/actions'

import 'react-select/dist/react-select.css'
import 'normalize.css/normalize.css'
import 'assets/styl/index.styl'
import 'assets/images/big_logo.png'
import 'assets/images/icon.png'

import Root from 'containers/Root'


const history = browserHistory

ReactDOM.render(
  <Provider store={ store }>
    <Root>
      <Router history={ history }>
        { routes }
      </Router>
    </Root>
  </Provider>,
  document.getElementById('root')
)
