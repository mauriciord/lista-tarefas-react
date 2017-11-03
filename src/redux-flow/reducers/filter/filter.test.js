'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import filter, { initialState } from './index'
import {
  SET_VISIBILITY_FILTER,
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from './actions'

it('should filter be a function', () => {
  expect(filter).to.be.a('function')
})

it('should show all todos', () => {
  const before = SHOW_COMPLETED
  const action = deepFreeze({
    type: SET_VISIBILITY_FILTER,
    payload: { filter: SHOW_ALL }
  })
  const after = SHOW_ALL

  expect(filter(before, action)).to.be.equal(after)
})

it('should show completed todos', () => {
  const before = SHOW_ALL
  const action = deepFreeze({
    type: SET_VISIBILITY_FILTER,
    payload: { filter: SHOW_COMPLETED }
  })
  const after = SHOW_COMPLETED

  expect(filter(before, action)).to.be.equal(after)
})

it('should show active todos', () => {
  const before = SHOW_COMPLETED
  const action = deepFreeze({
    type: SET_VISIBILITY_FILTER,
    payload: { filter: SHOW_ACTIVE }
  })
  const after = SHOW_ACTIVE

  expect(filter(before, action)).to.be.equal(after)
})

it('should return latest state when action is unknown', () => {
  const before = SHOW_COMPLETED
  const action = deepFreeze({
    type: 'SET_DELETED',
    payload: { filter: SHOW_ALL }
  })
  const after = SHOW_COMPLETED

  expect(filter(before, action)).to.be.equal(after)
})

it('should return initialState when latest state is undefined', () => {
  const before = undefined
  const action = deepFreeze({})
  const after = initialState

  expect(filter(before, action)).to.be.equal(after)
})
