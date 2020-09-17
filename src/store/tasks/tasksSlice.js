import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  isLoading: false,
  displayDoneTasks: false,
  displayTaskDate: false,
  todoId: 0,
  taskList: [],
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    isLoading: state => {
      state.loading = true;
    },

    setTodoId: (state, { payload }) => {
      state.todoId = payload;
    },
    
    setTaskList: (state, { payload }) => {
      state.taskList = payload;
      state.loading = false;
    },

    toggleDisplayDoneTasks: state => {
      state.displayDoneTasks = !state.displayDoneTasks;
    },
  },
})

export const { isLoading, setTaskList, setTodoId, toggleDisplayDoneTasks } = tasksSlice.actions;
export default tasksSlice.reducer;