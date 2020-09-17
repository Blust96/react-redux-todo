import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Input } from '../common';
import TodoList from './TodoList';
import { addTodo } from '../../store/todos/todosActions';
import './TodoNav.css';

const TodoNav = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const submit = () => {
    dispatch(addTodo(value));
    setValue('');
  }

  return (
    <nav className="container todos">
      <Input submit={submit} setValue={setValue} value={value} placeholder="ex: Meow list" />
      <TodoList />
    </nav>
  )
}

export default TodoNav;
