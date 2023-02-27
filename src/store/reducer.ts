// src/store/todos.js
import { createSlice } from '@reduxjs/toolkit'

export const TODOS_FEATURE_KEY = 'todos'
const { reducer: TodosReducer, actions } = createSlice({
  name: TODOS_FEATURE_KEY,
  initialState: [],
  reducers: {
    addTodo(state: any, action) {
      state.push(action.payload)
    },
  },
});

export const { addTodo } = actions;
export default TodosReducer;
