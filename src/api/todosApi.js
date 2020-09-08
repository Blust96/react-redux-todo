export const fetchLocalTodos = () => {
  let todos = [];

  if (localStorage.getItem('todos')) {
    todos = localStorage.getItem('todos');
    todos = JSON.parse(todos);
  }

  return todos;
}

export const setLocalTodos = todos => {
  localStorage.setItem('todos', JSON.stringify(todos));
}