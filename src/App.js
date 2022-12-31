import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { loadTodosFromLocalStorage, saveTodosToLocalStorage } from './lib/todos';
import AddTaskPage from './pages/AddTaskPage';
import EditTaskPage from './pages/EditTaskPage';
import HomePage from './pages/HomePage';
import DeleteModal from './components/DeleteModal'

const initialModalState = {
  isOpen: false,
  todo: {
    id: '',
    text: ''
  }
}

function App() {
  const [todos, setTodos] = useState([])
  const [modal, setModal] = useState(initialModalState)

  useEffect(() => {
    setTodos(loadTodosFromLocalStorage());
  }, []);

  const handleAddTodo = (todo) => {
    setTodos(prev => {
      const todos = [...prev, todo]
      saveTodosToLocalStorage(todos)
      return todos
    })
  }

  const handleEditTodo = (todo) => {
    setTodos(prev => {
      const todos = prev.map(item => {
        if (item.id === todo.id) return todo;
        return item;
      })
      saveTodosToLocalStorage(todos)
      return todos
    })
  }

  const handleRemoveTodo = (id) => {
    setTodos(prev => {
      const todos = prev.filter(item => item.id !== id)
      saveTodosToLocalStorage(todos)
      return todos
    })
  }

  const handleOpenModal = (id) => {
    const todo = todos.filter(todo => todo.id === id)[0]
    setModal({ isOpen: true, todo })
  }

  const handleCloseModal = () => {
    setModal(initialModalState)
  }

  const handleCheckTodo = (id) => {
    setTodos(prev => {
      const todos = prev.map(item => {
        if (item.id === id) {
          item.status = item.status === 'unchecked' ? 'checked' : 'unchecked'
          console.log(item.status);
        }
        return item
      })
      saveTodosToLocalStorage(todos)
      return todos
    })
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage todos={todos} openDeleteModal={handleOpenModal} checkTodo={handleCheckTodo} />} />
        <Route path="/add" element={<AddTaskPage addTodo={handleAddTodo} />} />
        <Route path="/edit/:id" element={<EditTaskPage todos={todos} editTodo={handleEditTodo} />} />
      </Routes>

      <DeleteModal todos={todos} modal={modal} removeTodo={handleRemoveTodo} closeModal={handleCloseModal} />
    </>
  );
}

export default App;
