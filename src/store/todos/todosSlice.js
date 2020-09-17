import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  isLoading: false,
  todoList: [],
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    isLoading: state => {
      state.loading = true;
    },

    setTodoList: (state, { payload }) => {
      state.todoList = payload;
      state.loading = false;
    },
  },
})

export const { isLoading, setTodoList } = todosSlice.actions;
export default todosSlice.reducer;