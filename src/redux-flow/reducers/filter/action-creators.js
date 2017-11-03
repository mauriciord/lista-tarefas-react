'use strict'

import {
  SET_VISIBILITY_FILTER
} from './actions'

export const filter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: { filter }
  }
}
