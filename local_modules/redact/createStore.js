import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'


const defaultMiddlewares = [
  thunk,
]

const defaultEnhancers = [

]


export default ({ reducer, initialState = {}, middlewares = [], enhancers = [] }) => {

  const finalMiddlewares = [
    ...defaultMiddlewares,
    ...middlewares
  ]

  const finalEnhancers = [
    ...defaultEnhancers,
    ...enhancers
  ]

  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(...finalMiddlewares),
      ...finalEnhancers
    )
  )

  return store

}
