import sendRequest from './sendRequest'
import merge from 'lodash.merge'


const reserved = [
  'onError',
  'onResponse',
]

const isReserved = (key) => reserved.indexOf(key) >= 0
const isFn = (key) => typeof key == 'function'

const mergeOptions = (defaults, opt) => {
  const options = merge(defaults, opt)

  if ('params' in options) {
    for (const key in options) {
      if (!options.hasOwnProperty(key)) continue

      if (!isReserved(key) && isFn(options[key])) {
        options[key] = options[key](options.params)
      }
    }
  }

  return options
}

const createAction = (options = {}) => {
  const action = (dispatch) => (payload) => {
    dispatch({ meta: options, payload })
  }

  action.type = 'reducerAction'

  return action
}

createAction.request = (defaults = {}) => {
  const action = (dispatch) => (opts = {}) => {
    const options = mergeOptions(defaults, opts)

    sendRequest({ options, dispatch })
  }

  action.type = 'apiAction'

  return action
}


export default createAction
