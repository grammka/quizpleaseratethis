import { createAction } from 'redact'


export const list = createAction.request({
  endpoint: 'http://localhost:3030/quizplease/games',
  method: 'GET'
})

export const get = createAction.request({
  endpoint: ({ gameId }) => `http://localhost:3030/quizplease/games/${gameId}`,
  method: 'GET'
})

export const create = createAction.request({
  endpoint: 'http://localhost:3030/quizplease/games',
  method: 'POST'
})
