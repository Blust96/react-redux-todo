import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid';

import { fetchLocalTodos, setLocalTodos } from '../api/todosApi';
import { getRandomDescription } from '../utils/getRandomDescription';

export const initialState = {
  isLoading: false,
  displayDoneTodos: false,
  displayTodoDate: false,
  todoList: [],
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    isLoading: state => {
      state.loading = true;
    },
    
    setTodos: (state, { payload }) => {
      state.todoList = payload;
      state.loading = false;
    },

    toggleDisplayDoneTodos: state => {
      state.displayDoneTodos = !state.displayDoneTodos;
    },
  },
})

export const { isLoading, setTodos, toggleDisplayDoneTodos } = todosSlice.actions;
export default todosSlice.reducer;

export const todosSelector = state => state.todos;
export const filteredTodos = state => {
  if (state.todos.displayDoneTodos)
    return state.todos.todoList;
  else {
    return state.todos.todoList.filter(todo => !todo.done);
  }
}

export function fetchTodos() {
  return dispatch => {
    dispatch(isLoading());

    const todoList = fetchLocalTodos();
    dispatch(setTodos(todoList));
  }
}

export function addTodo(description) {
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

export function addRandomTodo() {
  return dispatch => {
    dispatch(addTodo(getRandomDescription()));
  }
}

export function updateTodo(id, description) {
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

export function deleteTodo(id) {
  return (dispatch, getState) => {
    const { todos } = getState();
    dispatch(isLoading());

    const todoList = todos.todoList.filter(todo => todo.id !== id);

    setLocalTodos(todoList);
    dispatch(setTodos(todoList));
  }
}

export function toggleTodo(id) {
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