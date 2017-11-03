'use strict'

import {
  SET_SORTER_FILTER,
  SHOW_RECENTS
} from './actions'

export const initialState = SHOW_RECENTS

const sorter = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORTER_FILTER:
      return action.payload.sorter
    default:
      return state
  }
}

export default sorter
