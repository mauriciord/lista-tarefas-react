'use strict'
import { v4 } from 'uuid'
import moment from 'moment'
import {
  ADD_TODO,
  TOGGLE_TODO,
  DEL_TODO
} from './actions'

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: { id: v4(), created: moment().toDate(), text }
  }
}

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: { id }
  }
}

export const delTodo = (id) => {
  return {
    type: DEL_TODO,
    payload: { id }
  }
}
