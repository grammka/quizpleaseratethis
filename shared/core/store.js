import { createStore, createReducers } from 'redact'
import actions from 'actions'


const reducers = createReducers(actions)
const initialState = {}


const store = createStore({
  reducers,
  initialState
})


export default store
