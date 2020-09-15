import { v4 as uuid } from 'uuid';

import { fetchLocalTodos, setLocalTodos } from '../../api/todosApi';
import { getRandomDescription } from '../../utils/getRandomDescription';
import { isLoading, setTasks, toggleDisplayDoneTasks } from './tasksSlice';

const fetchTasks = () => {
  return dispatch => {
    dispatch(isLoading());

    const taskList = fetchLocalTodos();
    dispatch(setTasks(taskList));
  }
}

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

    setLocalTodos(taskList);
    dispatch(setTasks(taskList));
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

    setLocalTodos(taskList);
    dispatch(setTasks(taskList));
  }
}

const deleteTask = id => {
  return (dispatch, getState) => {
    const { tasks } = getState();
    dispatch(isLoading());

    const taskList = tasks.taskList.filter(task => task.id !== id);

    setLocalTodos(taskList);
    dispatch(setTasks(taskList));
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

    setLocalTodos(taskList);
    dispatch(setTasks(taskList));
  }
}

export {
  toggleDisplayDoneTasks,
  fetchTasks,
  addTask,
  addRandomTask,
  updateTask,
  deleteTask,
  toggleTask,
}