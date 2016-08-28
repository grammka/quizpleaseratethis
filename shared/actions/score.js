import { createAction } from 'redact'
import { services } from 'config'


export const update = createAction({
  endpoint: ({ scoreId }) => `${services.api}/quizplease/score/${scoreId}`,
  method: 'PUT',
})
