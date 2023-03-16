import { createSlice } from '@reduxjs/toolkit'
import { SETTING_FEATURE_KEY } from '../store-type'


const { reducer: StingReducer, actions } = createSlice({
  name: SETTING_FEATURE_KEY,
  initialState: {
    menu: true // 折叠与展开
  },
  reducers: {
    SET_SETTINGS_MENU(state: any, action) {
      console.log(state)
      state.menu = !state.menu
    }
  }
})

export const { SET_SETTINGS_MENU } = actions

export default StingReducer