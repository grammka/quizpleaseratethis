import { createStore, createReducer } from 'redact'
import actions from 'actions'


const reducer = createReducer(actions)
const initialState = { foo: 'bar' }


const store = createStore({
  reducer,
  initialState
})


export default store
