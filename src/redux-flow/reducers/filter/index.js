'use strict'

import {
  SET_VISIBILITY_FILTER,
  SHOW_ALL
} from './actions'

export const initialState = SHOW_ALL

const filter = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload.filter
    default:
      return state
  }
}

export default filter
