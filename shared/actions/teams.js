import { createAction } from 'redact'
import { services } from 'config'


export const list = createAction({
  endpoint: `${services.api}/quizplease/teams`,
  method: 'GET',
})
