'use strict'

import { combineReducers } from 'redux'
import todos from './todo/index'
import filters from './filter/index'
import sorters from './sorter/index'

export default combineReducers({
  todos,
  filters,
  sorters
})
