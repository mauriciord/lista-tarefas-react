'use strict'

'use strict'
import React from 'react'
import Form from 'components/form'
import TodoList from 'components/todo-list'
import Filter from 'components/filter'
import Sorter from 'components/sorter'
import './app.scss'

const App = () => (
  <div className='app-container'>
    <Form />
    <Sorter />
    <TodoList />
    <Filter />
  </div>
)

export default App
