'use strict'

import React from 'react'
import { connect } from 'react-redux'
import {
  toggleTodo,
  delTodo
} from 'reducers/todo/action-creators'
import { todosFilter, sorterFilter } from 'utils/filters'
import './TodoList.scss'

const TodoList = ({ todos, filters, sorters, handleToggleTodo, handleDelTodo }) => {
  const filteredTodos = todosFilter(
    sorterFilter(todos, sorters),
    filters
  )

  return (
    <div>
      {filteredTodos.map((todo) => (
        <div className='todo-list' key={todo.id}>
          <div className='check-container' onClick={handleToggleTodo(todo.id)}>
            {!!todo.completed && <span>✔</span>}
          </div>
          <div className='text-container' onClick={handleToggleTodo(todo.id)}>
            <span className={todo.completed ? 'todo-text-done' : 'todo-text-undone'}>
              {todo.text}
            </span>
          </div>
          <div className='btn-container'>
            <button className='btn-delete' onClick={handleDelTodo(todo.id)}>
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = ({ todos, filters, sorters }) => {
  return {
    todos,
    filters,
    sorters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleToggleTodo: (todoId) => (e) => {
      e.preventDefault()
      dispatch(toggleTodo(todoId))
    },
    handleDelTodo: (todoId) => (e) => {
      e.preventDefault()
      dispatch(delTodo(todoId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
