import { v4 as uuid } from 'uuid';

import { fetchLocalTodos, setLocalTodos } from '../../api/todosApi';
import { isLoading, setTodoList } from './todosSlice';
import { setTaskList, setTodoId } from '../tasks/tasksActions';

const fetchTodos = () => {
  return dispatch => {
    dispatch(isLoading());
    const todoList = fetchLocalTodos();

    dispatch(setTodoList(todoList));
    dispatch(setTodoId(todoList[0].id));
    dispatch(setTaskList(todoList[0].tasks));
  }
}

const setCurrentTodo = id => {
  return (dispatch, getState) => {
    const { todos } = getState();
    dispatch(isLoading());

    const currentTodo = todos.todoList.find(todo => todo.id === id);
    const currentTaskList = currentTodo.tasks;
    dispatch(setTodoId(id));
    dispatch(setTaskList(currentTaskList));
  }
}

const addTodo = name => {
  return (dispatch, getState) => {
    const { todos } = getState();
    dispatch(isLoading());

    const todo = {
      id: uuid(),
      name,
      tasks: [],
    }
    const todoList = [todo, ...todos.todoList];

    setLocalTodos(todoList);
    dispatch(setTodoList(todoList));
    dispatch(setCurrentTodo(todo.id));
  }
}

const updateTodo = (id, { name, taskList }) => {
  return (dispatch, getState) => {
    const { todos } = getState();
    dispatch(isLoading());

    const todoList = todos.todoList.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          name: name ? name : todo.name,
          tasks: taskList ? taskList : todo.tasks,
        }
      }

      return todo;
    });

    setLocalTodos(todoList);
    dispatch(setTodoList(todoList));
  }
}

const deleteTodo = id => {
  return (dispatch, getState) => {
    const { todos } = getState();
    dispatch(isLoading());

    const todoList = todos.todoList.filter(todo => todo.id !== id);

    setLocalTodos(todoList);
    dispatch(setTodoList(todoList));
    dispatch(setCurrentTodo(todoList[0].id));
  }
}

export {
  fetchTodos,
  setCurrentTodo,
  addTodo,
  updateTodo,
  deleteTodo,
}