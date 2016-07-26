import { createAction } from 'redact'


export const getAll = createAction({
  ednpoint: 'http://brainapi.ru/quizplease/teams',
  method: 'GET'
})
