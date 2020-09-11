import { v4 as uuid } from 'uuid';

import { fetchLocalTodos, setLocalTodos } from '../../api/todosApi';
import { getRandomDescription } from '../../utils/getRandomDescription';
import { isLoading, setTodos, toggleDisplayDoneTodos } from './todosSlice';

const fetchTodos = () => {
  return dispatch => {
    dispatch(isLoading());

    const todoList = fetchLocalTodos();
    dispatch(setTodos(todoList));
  }
}

const addTodo = description => {
  return (dispatch, getState) => {
    const { todos } = getState();
    dispatch(isLoading());

    const todo = {
      id: uuid(),
      description,
      done: false,
    }
    const todoList = [todo, ...todos.todoList];

    setLocalTodos(todoList);
    dispatch(setTodos(todoList));
  }
}

const addRandomTodo = () => {
  return dispatch => {
    dispatch(addTodo(getRandomDescription()));
  }
}

const updateTodo = (id, description) => {
  return (dispatch, getState) => {
    const { todos } = getState();
    dispatch(isLoading());

    const todoList = todos.todoList.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          description
        }
      }

      return todo;
    });

    setLocalTodos(todoList);
    dispatch(setTodos(todoList));
  }
}

const deleteTodo = id => {
  return (dispatch, getState) => {
    const { todos } = getState();
    dispatch(isLoading());

    const todoList = todos.todoList.filter(todo => todo.id !== id);

    setLocalTodos(todoList);
    dispatch(setTodos(todoList));
  }
}

const toggleTodo = id => {
  return (dispatch, getState) => {
    const { todos } = getState();
    dispatch(isLoading());

    const todoList = todos.todoList.map(todo => {
      if (todo.id !== id) {
        return todo;
      }

      return {
        ...todo,
        done: !todo.done,
        doneAt: !todo.done ? Date.now() : null,
       }
    });

    setLocalTodos(todoList);
    dispatch(setTodos(todoList));
  }
}

export {
  toggleDisplayDoneTodos,
  fetchTodos,
  addTodo,
  addRandomTodo,
  updateTodo,
  deleteTodo,
  toggleTodo,
}