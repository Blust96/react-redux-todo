import React from 'react';
import { useSelector } from 'react-redux';

import Task from './Task';
import { getFilteredTaskList } from '../../store/tasks/tasksSelectors';
import './TaskList.css';

const TaskList = () => {
  const taskList = useSelector(getFilteredTaskList);

  return taskList.length > 0 ?
    (
      <ul className="tasks__list">
        { taskList.map(task => (
          <Task task={task} key={task.id} />
        )) }
      </ul>
    ) : null
}

export default TaskList;
