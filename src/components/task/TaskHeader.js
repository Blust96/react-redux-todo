import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Plus, Shuffle } from 'react-bootstrap-icons';

import { IconButton, Input } from '../common';
import { addTask, addRandomTask, toggleDisplayDoneTasks } from '../../store/tasks/tasksActions';
import './TaskHeader.css';

const TaskHeader = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const submit = () => {
    dispatch(addTask(value));
    setValue('');
  }

  return (
    <header className="header">
      <div className="header__row">
        <Input submit={submit} setValue={setValue} value={value} placeholder="ex: To meow" />
        <IconButton onClick={submit} style={{ backgroundColor: 'var(--secondary-color)' }} disabled={value === ''}>
          <Plus size={20} />
        </IconButton>
      </div>
      <div className="header__row">
        <label htmlFor="header__checkbox" id="header__label">
          <input id="header__checkbox" type="checkbox" onChange={() => dispatch(toggleDisplayDoneTasks())} />
          <span id="header__checkbox-customed"></span>
          Tout afficher
        </label>
        <IconButton onClick={() => dispatch(addRandomTask())} style={{ backgroundColor: 'var(--primary-color)' }}>
          <Shuffle size={20} color="#fff" />
        </IconButton>
      </div>
    </header>
  )
}

export default TaskHeader;
