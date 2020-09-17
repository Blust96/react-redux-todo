import { v4 as uuid } from 'uuid';

import { getRandomDescription } from '../../utils/getRandomDescription';
import { isLoading, setTaskList, setTodoId, toggleDisplayDoneTasks } from './tasksSlice';
import { updateTodo } from '../todos/todosActions';

const addTask = description => {
  return (dispatch, getState) => {
    const { tasks } = getState();
    dispatch(isLoading());

    const task = {
      id: uuid(),
      description,
      done: false,
    }
    const taskList = [task, ...tasks.taskList];

    dispatch(updateTodo(tasks.todoId, { taskList }));
    dispatch(setTaskList(taskList));
  }
}

const addRandomTask = () => {
  return dispatch => {
    dispatch(addTask(getRandomDescription()));
  }
}

const updateTask = (id, description) => {
  return (dispatch, getState) => {
    const { tasks } = getState();
    dispatch(isLoading());

    const taskList = tasks.taskList.map(task => {
      if (task.id === id) {
        return {
          ...task,
          description
        }
      }

      return task;
    });

    dispatch(updateTodo(tasks.todoId, { taskList }));
    dispatch(setTaskList(taskList));
  }
}

const deleteTask = id => {
  return (dispatch, getState) => {
    const { tasks } = getState();
    dispatch(isLoading());

    const taskList = tasks.taskList.filter(task => task.id !== id);

    dispatch(updateTodo(tasks.todoId, { taskList }));
    dispatch(setTaskList(taskList));
  }
}

const toggleTask = id => {
  return (dispatch, getState) => {
    const { tasks } = getState();
    dispatch(isLoading());

    const taskList = tasks.taskList.map(task => {
      if (task.id !== id) {
        return task;
      }

      return {
        ...task,
        done: !task.done,
        doneAt: !task.done ? Date.now() : null,
       }
    });

    dispatch(updateTodo(tasks.todoId, { taskList }));
    dispatch(setTaskList(taskList));
  }
}

export {
  setTaskList,
  setTodoId,
  toggleDisplayDoneTasks,
  addTask,
  addRandomTask,
  updateTask,
  deleteTask,
  toggleTask,
}