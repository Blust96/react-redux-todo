import { v4 as uuid } from 'uuid';

export const fetchLocalTodos = () => {
  let todos = [{
    id: uuid(),
    name: 'Get started',
    tasks: [],
  }];

  if (localStorage.getItem('todos')) {
    todos = localStorage.getItem('todos');
    todos = JSON.parse(todos);
  }

  return todos;
}

export const setLocalTodos = todos => {
  localStorage.setItem('todos', JSON.stringify(todos));
}