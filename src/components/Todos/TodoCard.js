import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import EditLink from '../EditLink'
import RemoveBtn from '../RemoveBtn'

const TodoCard = ({ id, text, status, openDeleteModal, checkTodo }) => {
  return (
    <div className="todo-card">
      <div className="todo-card__group">
        <input className="todo-card__input" type="checkbox" name="todos" id={id} defaultChecked={status === 'checked'} onChange={() => checkTodo(id)} />
        <label className="todo-card__label" htmlFor={id}><span>{text}</span></label>
      </div>
      <div className="todo-card__btns">
        <EditLink id={id} />
        <RemoveBtn id={id} openDeleteModal={openDeleteModal} />
      </div>
    </div>
  )
}

TodoCard.defaultProps = {
  id: '',
  text: '',
  status: 'unchecked',
}

TodoCard.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  status: PropTypes.string,
  openDeleteModal: PropTypes.func,
  checkTodo: PropTypes.func,
}

export default TodoCard
