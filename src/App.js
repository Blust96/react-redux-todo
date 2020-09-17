import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import TasksContainer from './components/TasksContainer';
import { TodoNav } from './components/todo';
import { fetchTodos } from './store/todos/todosActions';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="app">
      <TodoNav />
      <TasksContainer />
    </div>
  );
}

export default App;
