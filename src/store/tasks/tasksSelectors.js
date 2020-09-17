export const getTasksState = state => state.tasks;

export const getFilteredTaskList = state => {
  if (state.tasks.displayDoneTasks)
    return state.tasks.taskList;
  else {
    return state.tasks.taskList.filter(task => !task.done);
  }
}

export const getTodoId = state => state.tasks.todoId;