import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { X, Check, TrashFill } from 'react-bootstrap-icons';

import TaskBox from './TaskBox';
import { IconButton } from '../common';
import { toggleTask, updateTask, deleteTask } from '../../store/tasks/tasksActions';
import { getFormattedDate } from '../../utils/getFormattedDate';
import './Task.css';

const Task = props => {
  const { task } = props;
  const { id, description, done, doneAt = null } = task;

  const dispatch = useDispatch();
  const dispatchUpdate = value => {
    dispatch(updateTask(id, value));
  }

  const [isBoxActive, setIsBoxActive] = useState(false);

  return (
    <div className={`tasks__item${ done ? ' tasks__item-done' : ''}`}>
      <div className="tasks__content">
        <p className="tasks__description" onClick={() => setIsBoxActive(!isBoxActive)}>{ description }</p>
        <IconButton onClick={() => dispatch(toggleTask(id))} style={{ backgroundColor: 'var(--primary-color)' }}>
          { done ? <X size={20} /> : <Check size={20} /> }
        </IconButton>
        <IconButton onClick={() => dispatch(deleteTask(id))} style={{ backgroundColor: 'var(--secondary-color)' }}>
          <TrashFill size={20} />
        </IconButton>
      </div>
      { doneAt ? <p className="tasks__date">Fais le { getFormattedDate(doneAt) }</p> : null}
      { isBoxActive ? <TaskBox task={task} dispatchUpdate={dispatchUpdate} /> : null }
    </div>
  )
}

export default Task;
