import { createAction } from 'redact'


export const initialState = {
  locale: 'en',
  isSidebarWide: true
}

export const setLocale = createAction({
  subset: 'locale',
  reduce: (state = initialState, payload) => {
    return { ...state, locale: payload }
  }
})
