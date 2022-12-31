import React from 'react'
import PropTypes from 'prop-types'

const RemoveBtn = ({ id, openDeleteModal }) => {
  return (
    <button className="todo-card__remove" type="button" onClick={() => openDeleteModal(id)}>
      <svg width="25" height="25" viewBox="0 0 25 25" fill="black" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" width="25" height="5" rx="2.5" transform="rotate(90 15 0)" />
        <rect y="10" width="25" height="5" rx="2.5" />
      </svg>
    </button>
  )
}

RemoveBtn.defaultProps = {
  id: '',
}

RemoveBtn.propTypes = {
  id: PropTypes.string,
  openDeleteModal: PropTypes.func,
}

export default RemoveBtn
