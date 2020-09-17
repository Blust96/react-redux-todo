import React from 'react';
import { useSelector } from 'react-redux';

import Todo from './Todo';
import { getTodoList } from '../../store/todos/todosSelectors';
import './TodoList.css';

const TodoList = () => {
  const todoList = useSelector(getTodoList);

  return (
    <ul className="todos__list">
      {
        todoList.map(todo => <Todo todo={todo} key={todo.id} />)
      }
    </ul>
  )
}

export default TodoList;
