import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const initialFormState = {
  text: '',
}

const EditTaskPage = ({ todos, editTodo }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState(initialFormState)

  useEffect(() => {
    if (todos.length > 0)
      setForm(todos.filter(todo => todo.id === id)[0])
  }, [todos])

  const handleFromChange = ({ target }) => {
    setForm(prev => ({ ...prev, [target.name]: target.value }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    editTodo(form)

    navigate('/')
  }

  return (
    <main className="todos">
      <div className="container">
        <h1 className="todos__title">Редактировать задачу</h1>

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
  )
}

EditTaskPage.defaultProps = {
  todos: [],
}

EditTaskPage.propTypes = {
  todos: PropTypes.array,
  editTodo: PropTypes.func,
}

export default EditTaskPage;
