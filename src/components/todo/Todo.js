import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { X, Check, TrashFill } from 'react-bootstrap-icons';

import TodoBox from './TodoBox';
import { IconButton } from '../common';
import { toggleTodo, updateTodo, deleteTodo } from '../../store/todos/todosActions';
import { getFormattedDate } from '../../utils/getFormattedDate';
import './Todo.css';

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
      <div className="todos__content">
        <p className="todos__description" onClick={() => setIsBoxActive(!isBoxActive)}>{ description }</p>
        <IconButton onClick={() => dispatch(toggleTodo(id))} style={{ backgroundColor: 'var(--primary-color)' }}>
          { done ? <X size={20} /> : <Check size={20} /> }
        </IconButton>
        <IconButton onClick={() => dispatch(deleteTodo(id))} style={{ backgroundColor: 'var(--secondary-color)' }}>
          <TrashFill size={20} />
        </IconButton>
      </div>
      { doneAt ? <p className="todos__date">Fais le { getFormattedDate(doneAt) }</p> : null}
      { isBoxActive ? <TodoBox todo={todo} dispatchUpdate={dispatchUpdate} /> : null }
    </div>
  )
}

export default Todo;
