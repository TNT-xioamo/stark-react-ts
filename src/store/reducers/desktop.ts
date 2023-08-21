import { createSlice } from '@reduxjs/toolkit'
import { DESKTOP_FEATURE_KEY } from '../store-type'

const { reducer: Desktop, actions }  = createSlice({
  name: DESKTOP_FEATURE_KEY,
  initialState: {
    showBar: false, // 是否显示min-bar
  },
  reducers: {
    SET_DESKTOP_BAR: (state, action) => {
      state.showBar = !state.showBar
    }
  }
})

export const { SET_DESKTOP_BAR } = actions

export default Desktop