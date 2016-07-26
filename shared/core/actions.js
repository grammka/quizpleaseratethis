import { createActions } from 'redact'
import actions from 'actions'
import store from 'core/store'


export default createActions(actions, store.dispatch)
