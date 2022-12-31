import React from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

const DeleteModal = ({ modal, removeTodo, closeModal }) => {

  const handleSubmit = (e) => {
    e.preventDefault()

    removeTodo(modal.todo.id)
    closeModal()
  }

  return createPortal(
    <div className={`modal ${modal.isOpen ? 'modal_active' : null}`}>
      <div className="modal__overlay" onClick={() => closeModal()} />
      <div className="modal__content">
        <button className="modal__close btn-reset" type="button" onClick={() => closeModal()}>
          <span></span>
        </button>
        <h2 className="modal__title">Удалить задачу</h2>

        <form className="form" onSubmit={handleSubmit}>
          <p className="form__text">Вы действительно хотите удалить задачу "{modal.todo.text}"?</p>
          <div className="form__btns">
            <button className="form__btn form__submit btn-reset" type="submit">Да</button>
            <button className="form__btn form__cancel btn-reset" type="button" onClick={() => closeModal()}>Отмена</button>
          </div>
        </form>

      </div>
    </div>,
    document.body
  )
}

DeleteModal.defaultProps = {
  modal: {
    isOpen: false,
    todo: {
      id: '',
      text: '',
      status: 'unchecked',
    }
  },
}

DeleteModal.propTypes = {
  modal: PropTypes.object,
  removeTodo: PropTypes.func,
  closeModal: PropTypes.func,
}

export default DeleteModal;
