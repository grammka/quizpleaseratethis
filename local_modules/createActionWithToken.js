import cookie from 'react-cookie'
import { createAction } from 'redact'


const createActionWithToken = (opts) => {
  opts.token = cookie.load('token')

  return createAction(opts)
}


export default createActionWithToken
