'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import todo, { initialState } from './index'
import {
  ADD_TODO,
  TOGGLE_TODO,
  DEL_TODO
} from './actions'

it('should todo be a function', () => {
  expect(todo).to.be.a('function')
})

it('should add a todo item', () => {
  const before = deepFreeze([])
  const action = deepFreeze({
    type: ADD_TODO,
    payload: {
      id: 0,
      text: 'Aloww'
    }
  })
  const after = [{ id: 0, text: 'Aloww', completed: false }]
  expect(todo(before, action)).to.be.deep.equal(after)
})

it('should add a new todo item', () => {
  const before = deepFreeze([{
    id: 0,
    text: 'Aloww',
    completed: false
  }])
  const action = deepFreeze({
    type: ADD_TODO,
    payload: {
      id: 1,
      text: 'Hey'
    }
  })
  const after = [
    { id: 0, text: 'Aloww', completed: false },
    { id: 1, text: 'Hey', completed: false }
  ]
  expect(todo(before, action)).to.be.deep.equal(after)
})

it('should toggle first todo', () => {
  const before = deepFreeze([
    { id: 0, text: 'Aloww', completed: false },
    { id: 1, text: 'Hey', completed: false }
  ])

  const action = deepFreeze({
    type: TOGGLE_TODO,
    payload: { id: 0 }
  })

  const after = [
    { id: 0, text: 'Aloww', completed: true },
    { id: 1, text: 'Hey', completed: false }
  ]

  expect(todo(before, action)).to.be.deep.equal(after)
})

it('should toggle second todo', () => {
  const before = deepFreeze([
    { id: 0, text: 'Aloww', completed: false },
    { id: 1, text: 'Hey', completed: false }
  ])

  const action = deepFreeze({
    type: TOGGLE_TODO,
    payload: { id: 1 }
  })

  const after = [
    { id: 0, text: 'Aloww', completed: false },
    { id: 1, text: 'Hey', completed: true }
  ]

  expect(todo(before, action)).to.be.deep.equal(after)
})

it('should delete the first todo', () => {
  const before = deepFreeze([
    { id: 3, text: 'Aloww', completed: false },
    { id: 5, text: 'Hey', completed: false },
    { id: 9, text: 'Hey', completed: false }
  ])

  const action = deepFreeze({
    type: DEL_TODO,
    payload: { id: 3 }
  })

  const after = [
    { id: 5, text: 'Hey', completed: false },
    { id: 9, text: 'Hey', completed: false }
  ]

  expect(todo(before, action)).to.be.deep.equal(after)
})

it('should delete the second todo', () => {
  const before = deepFreeze([
    { id: 0, text: 'Aloww', completed: false },
    { id: 1, text: 'Hey', completed: false },
    { id: 2, text: 'Hey John', completed: false }
  ])

  const action = deepFreeze({
    type: DEL_TODO,
    payload: { id: 1 }
  })

  const after = [
    { id: 0, text: 'Aloww', completed: false },
    { id: 2, text: 'Hey John', completed: false }
  ]

  expect(todo(before, action)).to.be.deep.equal(after)
})

it('should return the latest state when action is unknown', () => {
  const before = deepFreeze([ { id: 0, text: 'Aloww', completed: false } ])
  const action = deepFreeze({ type: 'ANYTHING' })
  const after = [ { id: 0, text: 'Aloww', completed: false } ]

  expect(todo(before, action)).to.be.deep.equal(after)
})

it('should return initialState when state before is undefined', () => {
  const before = undefined
  const action = deepFreeze({ type: 'ANYTHING' })
  const after = initialState

  expect(todo(before, action)).to.be.deep.equal(after)
})
