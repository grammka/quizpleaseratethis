import { createAction } from 'redact'
import { services } from 'config'


export const list = createAction({
  endpoint: `${services.api}/quizplease/games`,
  method: 'GET',
})

export const get = createAction({
  endpoint: ({ gameId }) => `${services.api}/quizplease/games/${gameId}`,
  method: 'GET',
})

export const create = createAction({
  endpoint: `${services.api}/quizplease/games`,
  method: 'POST',
})
