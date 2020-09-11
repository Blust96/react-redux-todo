import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  isLoading: false,
  displayDoneTodos: false,
  displayTodoDate: false,
  todoList: [],
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    isLoading: state => {
      state.loading = true;
    },
    
    setTodos: (state, { payload }) => {
      state.todoList = payload;
      state.loading = false;
    },

    toggleDisplayDoneTodos: state => {
      state.displayDoneTodos = !state.displayDoneTodos;
    },
  },
})

export const { isLoading, setTodos, toggleDisplayDoneTodos } = todosSlice.actions;
export default todosSlice.reducer;