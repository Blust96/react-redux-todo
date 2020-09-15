import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  isLoading: false,
  displayDoneTasks: false,
  displayTaskDate: false,
  taskList: [],
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    isLoading: state => {
      state.loading = true;
    },
    
    setTasks: (state, { payload }) => {
      state.taskList = payload;
      state.loading = false;
    },

    toggleDisplayDoneTasks: state => {
      state.displayDoneTasks = !state.displayDoneTasks;
    },
  },
})

export const { isLoading, setTasks, toggleDisplayDoneTasks } = tasksSlice.actions;
export default tasksSlice.reducer;