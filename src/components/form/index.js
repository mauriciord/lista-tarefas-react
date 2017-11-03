'use strict'

import React from 'react'
import { connect } from 'react-redux'
import {
  addTodo
} from 'reducers/todo/action-creators'
import './form.scss'

const Form = ({ handleAddTodo }) => (
  <div className='form-container'>
    <form className='todo-form' onSubmit={handleAddTodo}>
      <input
        className='todo-form-input'
        type='text'
        placeholder='Digite sua tarefa. Ex.: Comprar pão'
        name='todo'
      />
    </form>
  </div>
)

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddTodo: (e) => {
      e.preventDefault()
      dispatch(addTodo(e.target.todo.value))
      e.target.todo.value = ''
    }
  }
}

export default connect(null, mapDispatchToProps)(Form)
