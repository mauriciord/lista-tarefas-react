'use strict'

import React from 'react'
import { connect } from 'react-redux'
import {
  filter
} from 'reducers/filter/action-creators'
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from 'reducers/filter/actions'
import './filter.scss'

const Filter = ({ handleFilter }) => (
  <div className='filter-container'>
    <a className='btn-filter' onClick={handleFilter(SHOW_ALL)}>Mostrar todos</a>
    <a className='btn-filter' onClick={handleFilter(SHOW_COMPLETED)}>Mostrar completados</a>
    <a className='btn-filter' onClick={handleFilter(SHOW_ACTIVE)}>Mostrar à fazer</a>
  </div>
)

const mapDispatchToProps = (dispatch) => {
  return {
    handleFilter: (filterOpt) => (e) => {
      e.preventDefault()
      dispatch(filter(filterOpt))
    }
  }
}

export default connect(null, mapDispatchToProps)(Filter)
