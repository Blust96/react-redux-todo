import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TrashFill, PencilFill } from 'react-bootstrap-icons';

import { IconButton, Input } from '../common';
import { setCurrentTodo, deleteTodo, updateTodo } from '../../store/todos/todosActions';
import { getTodoListCount } from '../../store/todos/todosSelectors';
import { getTodoId } from '../../store/tasks/tasksSelectors';
import './Todo.css';

const Todo = props => {
  const { todo } = props;
  const { id, name } = todo;

  const inputEl = useRef(null);
  const [isEditable, setIsEditable] = useState(false);
  const [value, setValue] = useState(name);

  const todoListCount = useSelector(getTodoListCount);
  const currentTodoId = useSelector(getTodoId);
  const isActive = id === currentTodoId;

  const dispatch = useDispatch();

  const toggleInput = () => {
    setIsEditable(!isEditable);
  }

  const submit = () => {
    dispatch(updateTodo(id, { name: value }));
    setIsEditable(false);
  }

  useEffect(() => {
    if (isEditable) {
      inputEl.current.focus();
    }
  }, [isEditable])

  const renderContent = () => (
    <>
      { name }
      <div className="todos__buttons">
        <IconButton onClick={toggleInput} style={{ backgroundColor: 'white' }} >
          <PencilFill size={20} />
        </IconButton>
        { todoListCount > 1 ? (
          <IconButton onClick={() => dispatch(deleteTodo(id))} style={{ backgroundColor: 'var(--secondary-color)' }}>
            <TrashFill size={20} />
          </IconButton>
        ) : null }
      </div>
    </>
  );

  return (
    <li onClick={() => !isEditable ? dispatch(setCurrentTodo(id)) : null} className={`todos__link${isActive ? ' todos__link-active' : ''}`}>
      { 
        !isEditable ?
          renderContent()
          : <Input submit={submit} setValue={setValue} value={value} placeholder="ex: Meow list" inputRef={inputEl} /> 
      }
    </li>
  )
}

export default Todo;
