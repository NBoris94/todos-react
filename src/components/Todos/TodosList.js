import React from 'react'
import PropTypes from 'prop-types'
import TodoCard from './TodoCard'

const TodosList = ({ listTitle, todos, openDeleteModal, checkTodo }) => {
  if (todos.length === 0) return null

  return (
    <ul className="todos-list">
      <li className="todos-list__title">
        <h2>{listTitle} - <span>{todos.length}</span></h2>
      </li>

      {todos.map(todo => (
        <li className="todos-list__item" key={todo.id}>
          <TodoCard {...todo} openDeleteModal={openDeleteModal} checkTodo={checkTodo} />
        </li>
      ))}

    </ul>
  )
}

TodosList.defaultProps = {
  listTitle: '',
  todos: [],
}

TodosList.propTypes = {
  listTitle: PropTypes.string,
  todos: PropTypes.array,
  openDeleteModal: PropTypes.func,
  checkTodo: PropTypes.func,
}

export default TodosList
