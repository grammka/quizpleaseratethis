const createReducer = (actions) => {
  const reducers = {}

  for (let actionNode in actions) {
    if (!actions.hasOwnProperty(actionNode)) continue

    for (let methodName in actions[actionNode]) {
      if (!actions[actionNode].hasOwnProperty(methodName)) continue

      const actionType = `${actionNode}.${methodName}`

      reducers[actionType] = (state = {}, payload) => {
        console.log(1111111, state, payload)
      }
    }
  }

  return (state = {}, { type, payload }) => {
    if (!(type in reducers)) {
      return state
    }

    return reducers[type](state, payload)
  }
}


export default createReducer
