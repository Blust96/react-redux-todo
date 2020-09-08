import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Todo from './Todo';
import { fetchTodos, filteredTodos } from '../../store/todosSlice';

const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector(filteredTodos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch])

  return (
    <ul className="todos">
      { todoList.map(todo => (
        <Todo todo={todo} key={todo.id} />
      )) }
    </ul>
  )
}

export default TodoList;
