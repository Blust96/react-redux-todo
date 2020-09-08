import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Check, TrashFill } from 'react-bootstrap-icons';

import TodoBox from './TodoBox';
import { IconButton } from '../common';
import { toggleTodo, updateTodo, deleteTodo } from '../../store/todosSlice';
import { getFormattedDate } from '../../utils/getFormattedDate';

const Todo = props => {
  const { todo } = props;
  const { id, description, done, doneAt = null } = todo;

  const dispatch = useDispatch();
  const dispatchUpdate = value => {
    dispatch(updateTodo(id, value));
  }

  const [isBoxActive, setIsBoxActive] = useState(false);

  return (
    <div className={`todos__item${ done ? ' todos__item-done' : ''}`}>
      <p onClick={() => setIsBoxActive(!isBoxActive)}>{ description }</p>
      <IconButton onClick={() => dispatch(toggleTodo(id))}>
        <Check />
      </IconButton>
      <IconButton onClick={() => dispatch(deleteTodo(id))}>
        <TrashFill />
      </IconButton>
      <button onClick={() => dispatch(deleteTodo(id))}>Supprimer</button>
      { doneAt ? <p>{ getFormattedDate(doneAt) }</p> : null}
      <TodoBox isActive={isBoxActive} todo={todo} dispatchUpdate={dispatchUpdate} />
    </div>
  )
}

export default Todo;
