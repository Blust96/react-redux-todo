import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todos/todosSlice';
import tasksReducer from './tasks/tasksSlice';

export default configureStore({
  reducer: {
    todos: todosReducer,
    tasks: tasksReducer,
  },
});
