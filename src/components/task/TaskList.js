import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Task from './Task';
import { fetchTasks } from '../../store/tasks/tasksActions';
import { getFilteredTaskList } from '../../store/tasks/tasksSelectors';
import './TaskList.css';

const TaskList = () => {
  const dispatch = useDispatch();
  const taskList = useSelector(getFilteredTaskList);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch])

  return taskList.length > 0 ?
    (
      <ul className="tasks">
        { taskList.map(task => (
          <Task task={task} key={task.id} />
        )) }
      </ul>
    ) : null
}

export default TaskList;
