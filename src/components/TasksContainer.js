import React from 'react';

import { TaskHeader, TaskList } from './task';
import './TasksContainer.css';

const TasksContainer = () => {
  return (
    <div className="container tasks">
      <TaskHeader />
      <TaskList />
    </div>
  )
}

export default TasksContainer;
