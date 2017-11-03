'use strict'

import {
  SET_SORTER_FILTER
} from './actions'

export const sort = (sorter) => {
  return {
    type: SET_SORTER_FILTER,
    payload: { sorter }
  }
}
