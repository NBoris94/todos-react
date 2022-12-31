import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const EditLink = ({ id }) => {
  return (
    <Link className="todo-card__edit" to={`/edit/${id}`}>
      <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" width="64px" height="64px">
        <path d="M38.406 22.234l11.36 11.36L28.784 54.576l-12.876 4.307c-1.725.577-3.367-1.065-2.791-2.79l4.307-12.876L38.406 22.234zM41.234 19.406l5.234-5.234c1.562-1.562 4.095-1.562 5.657 0l5.703 5.703c1.562 1.562 1.562 4.095 0 5.657l-5.234 5.234L41.234 19.406z" />
      </svg>
    </Link>
  )
}

EditLink.defaultProps = {
  id: '',
}

EditLink.propTypes = {
  id: PropTypes.string,
}

export default EditLink
