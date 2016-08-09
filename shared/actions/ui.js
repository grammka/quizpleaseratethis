import { createAction } from 'redact'


export const initialState = {
  locale: 'en',
  isSidebarWide: true
}
//
// export const setLocale = createAction((state, payload) => ({ ...state, locale: payload }))

export const toggleLocale = createAction((state, payload) => ({ ...state, locale: state.locale == 'en' ? 'ru' : 'en' }))
