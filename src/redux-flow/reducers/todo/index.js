'use strict'

import {
  ADD_TODO,
  TOGGLE_TODO,
  DEL_TODO
} from './actions'

export const initialState = []

const todo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          created: action.payload.created,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id !== action.payload.id) {
          return todo
        }

        return {
          ...todo,
          completed: !todo.completed
        }
      })
    case DEL_TODO:
      const index = state.findIndex(x => x.id === action.payload.id)
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ]
    default:
      return state
  }
}

export default todo
