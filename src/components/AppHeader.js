import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Plus, Shuffle } from 'react-bootstrap-icons';

import { IconButton, Input } from './common';
import { addTodo, addRandomTodo, toggleDisplayDoneTodos } from '../store/todosSlice';
import './AppHeader.css';

const AppHeader = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const submit = () => {
    dispatch(addTodo(value));
    setValue('');
  }

  return (
    <header className="header">
      <h1 className="header__title">Todo-List</h1>
      <div className="header__row">
        <Input submit={submit} setValue={setValue} value={value} />
        <IconButton onClick={() => submit()} style={{ backgroundColor: 'var(--secondary-color)' }} disabled={value === ''}>
          <Plus size={20} />
        </IconButton>
      </div>
      <div className="header__row">
        <label for="header__checkbox" id="header__label">
          <input id="header__checkbox" type="checkbox" onChange={() => dispatch(toggleDisplayDoneTodos())} />
          <span id="header__checkbox-customed"></span>
          Tout afficher
        </label>
        <IconButton onClick={() => dispatch(addRandomTodo())} style={{ backgroundColor: 'var(--primary-color)' }}>
          <Shuffle size={20} color="#fff" />
        </IconButton>
      </div>
    </header>
  )
}

export default AppHeader;
