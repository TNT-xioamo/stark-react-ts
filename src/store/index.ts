import { createSlice, configureStore } from '@reduxjs/toolkit'
import StingReducer from './reducers/settings'
import { SETTING_FEATURE_KEY } from './store-type'


export default configureStore({
  reducer: {
    [SETTING_FEATURE_KEY]: StingReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})