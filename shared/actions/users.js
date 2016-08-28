import createAction from 'createActionWithToken'
import { services } from 'config'


export const getCurrent = createAction({
  endpoint: `${services.api}/quizplease/users/me`,
  method: 'GET',
  subset: 'me',
})

export const auth = createAction({
  endpoint: `${services.api}/quizplease/users/auth`,
  method: 'POST',
})
