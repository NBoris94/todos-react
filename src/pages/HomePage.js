import React from 'react'
import PropTypes from 'prop-types'
import AddLink from '../components/AddLink'
import TodosList from '../components/Todos/TodosList'

const HomePage = ({ todos, openDeleteModal, checkTodo }) => {
  return (
    <main className="todos">
      <div className="container">
        <h1 className="todos__title">Список задач</h1>

        <div className="todos__group">

          <AddLink />

          <TodosList listTitle="Задачи" todos={todos.filter(todo => todo.status === 'unchecked')} openDeleteModal={openDeleteModal} checkTodo={checkTodo} />
          <TodosList listTitle="Выполненые задачи" todos={todos.filter(todo => todo.status === 'checked')} openDeleteModal={openDeleteModal} checkTodo={checkTodo} />
        </div>
      </div>

    </main>
  )
}

HomePage.defaultProps = {
  todos: [],
}

HomePage.propTypes = {
  todos: PropTypes.array,
  openDeleteModal: PropTypes.func,
  checkTodo: PropTypes.func,
}

export default HomePage
