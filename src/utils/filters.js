'use strict'

import { orderBy } from 'lodash'
import {
  SHOW_RECENTS,
  SHOW_OLDER
} from 'reducers/sorter/actions'
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from 'reducers/filter/actions'

export const sorterFilter = (todos, sorterFilter) => {
  switch (sorterFilter) {
    case SHOW_RECENTS:
      return orderBy(todos, 'created', 'desc')
    case SHOW_OLDER:
      return orderBy(todos, 'created', 'asc')
  }
}

export const todosFilter = (todos, visibilityFilter) => {
  switch (visibilityFilter) {
    case SHOW_ALL:
      return todos
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
  }
}