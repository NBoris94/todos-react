import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { Link, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const initialFormState = {
  text: ''
}

const AddTaskPage = ({ addTodo }) => {
  const [form, setForm] = useState(initialFormState)
  const navigate = useNavigate()

  const handleFromChange = ({ target }) => {
    setForm(prev => ({ ...prev, [target.name]: target.value }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const todo = {
      id: nanoid(),
      ...form,
      status: 'unchecked',
    }

    addTodo(todo)
    navigate('/')
  }

  return (
    <main className="todos">
      <div className="container">
        <h1 className="todos__title">Добавить задачу</h1>

        <div className="todos__card">
          <form action="" className="form" onSubmit={handleFormSubmit}>
            <input className="form__input" type="text" placeholder="Текст задачи" name="text" value={form.text} onChange={handleFromChange} />
            <div className="form__btns">
              <button className="form__btn form__submit btn-reset" type="submit">Сохранить</button>
              <Link className="form__btn form__cancel btn-reset" to="/">Отмена</Link>
            </div>
          </form>
        </div>

      </div>
    </main>
  );
}

AddTaskPage.propTypes = {
  addTodo: PropTypes.func,
}

export default AddTaskPage
