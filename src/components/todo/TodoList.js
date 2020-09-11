import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Todo from './Todo';
import { fetchTodos } from '../../store/todos/todosActions';
import { getFilteredTodoList } from '../../store/todos/todosSelectors';
import './TodoList.css';

const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector(getFilteredTodoList);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch])

  return todoList.length > 0 ?
    (
      <ul className="todos">
        { todoList.map(todo => (
          <Todo todo={todo} key={todo.id} />
        )) }
      </ul>
    ) : null
}

export default TodoList;
