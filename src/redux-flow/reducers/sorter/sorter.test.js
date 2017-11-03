'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import sorter, { initialState } from './index'
import {
  SET_SORTER_FILTER,
  SHOW_RECENTS,
  SHOW_OLDER
} from './actions'

it('should sorter be a function', () => {
  expect(sorter).to.be.a('function')
})

it('should show recent todos', () => {
  const before = SHOW_OLDER
  const action = deepFreeze({
    type: SET_SORTER_FILTER,
    payload: { sorter: SHOW_RECENTS }
  })
  const after = SHOW_RECENTS

  expect(sorter(before, action)).to.be.equal(after)
})

it('should show older todos', () => {
  const before = SHOW_RECENTS
  const action = deepFreeze({
    type: SET_SORTER_FILTER,
    payload: { sorter: SHOW_OLDER }
  })
  const after = SHOW_OLDER

  expect(sorter(before, action)).to.be.equal(after)
})

it('should return latest state when action is unknown', () => {
  const before = SHOW_OLDER
  const action = deepFreeze({
    type: 'SET_DELETED',
    payload: { sorter: SHOW_RECENTS }
  })
  const after = SHOW_OLDER

  expect(sorter(before, action)).to.be.equal(after)
})

it('should return initialState when latest state is undefined', () => {
  const before = undefined
  const action = deepFreeze({})
  const after = initialState

  expect(sorter(before, action)).to.be.equal(after)
})
