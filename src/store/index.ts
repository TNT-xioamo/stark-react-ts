import { createSlice, configureStore } from '@reduxjs/toolkit'
import TodosReducer, { TODOS_FEATURE_KEY } from './reducer'


export default configureStore({
  reducer: {
    [TODOS_FEATURE_KEY]: TodosReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
})