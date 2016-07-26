import sendRequest from './sendRequest'


const createAction = (params) => {
  return (dispatch) => {
    console.log(555)
  }
}

createAction.request = (defaults = {}) => (dispatch) => (opts = {}) => {
  // merge options
  const options = {}

  return sendRequest({ options, dispatch })
}


export default createAction
