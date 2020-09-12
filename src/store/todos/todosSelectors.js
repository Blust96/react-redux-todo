export const getTodosState = state => state.todos;

export const getFilteredTodoList = state => {
  if (state.todos.displayDoneTodos)
    return state.todos.todoList;
  else {
    return state.todos.todoList.filter(todo => !todo.done);
  }
}