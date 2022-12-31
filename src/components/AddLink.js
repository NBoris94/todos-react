import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const AddLink = ({ addTodo }) => {
  return (
    <Link className="todos__add btn-reset" to="/add">
      <span>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="black" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" width="25" height="5" rx="2.5" transform="rotate(90 15 0)" />
          <rect y="10" width="25" height="5" rx="2.5" />
        </svg>
      </span>
      Добавить задачу
    </Link>
  )
}

AddLink.propTypes = {
  addTodo: PropTypes.func,
}

export default AddLink
