import { createAction } from 'redact'


export const getAll = createAction.request({
  ednpoint: 'http://brainapi.ru/quizplease/games',
  method: 'GET'
})

export const create = createAction({
  ednpoint: 'http://brainapi.ru/quizplease/games',
  method: 'POST'
})
