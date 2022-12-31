const saveTodosToLocalStorage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

const loadTodosFromLocalStorage = () => {
  const todos = localStorage.getItem('todos')
  return todos !== null ? JSON.parse(todos) : []
}

export { saveTodosToLocalStorage, loadTodosFromLocalStorage }
