'use strict'

import React from 'react'
import { connect } from 'react-redux'
import {
  sort
} from 'reducers/sorter/action-creators'
import {
  SHOW_RECENTS,
  SHOW_OLDER
} from 'reducers/sorter/actions'
import './sorter.scss'

const Sorter = ({ handleSorter }) => (
  <div className='sort-container'>
    <a className='btn-filter' onClick={handleSorter(SHOW_RECENTS)}>Ordenar por recentes</a>
    <a className='btn-filter' onClick={handleSorter(SHOW_OLDER)}>Ordenar por antigas</a>
  </div>
)

const mapDispatchToProps = (dispatch) => {
  return {
    handleSorter: (sortOpt) => (e) => {
      e.preventDefault()
      dispatch(sort(sortOpt))
    }
  }
}

export default connect(null, mapDispatchToProps)(Sorter)
