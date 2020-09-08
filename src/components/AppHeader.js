import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { TodoInput } from './todo';
import { addTodo, addRandomTodo, toggleDisplayDoneTodos } from '../store/todosSlice';

const AppHeader = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const submit = () => {
    dispatch(addTodo(value));
    setValue('');
  }

  return (
    <header>
      <h1>Todo-List</h1>
      <TodoInput submit={submit} setValue={setValue} value={value} />
      <button onClick={() => dispatch(toggleDisplayDoneTodos())} >Afficher les terminées</button>
      <button onClick={() => submit()} disabled={value === ''}>Ajouter</button>
      <button onClick={() => dispatch(addRandomTodo())}>Aléatoire</button>
    </header>
  )
}

export default AppHeader;
