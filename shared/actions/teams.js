import { createAction } from 'redact'


export const getAll = createAction.request({
  ednpoint: 'http://brainapi.ru/quizplease/teams',
  method: 'GET'
})
