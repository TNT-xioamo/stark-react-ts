import { createSlice } from '@reduxjs/toolkit'
import { SETTING_FEATURE_KEY } from '../store-type'


const { reducer: StingReducer, actions } = createSlice({
  name: SETTING_FEATURE_KEY,
  initialState: {
    collapse: false, // 折叠与展开
    menuSide: 254, // 侧边宽度
    foldIcon: false, // 收起按钮
    themes: 'light' // 主题
  },
  reducers: {
    SET_SETTINGS_MENU(state: any) {
      state.collapse = !state.collapse
      const vnode: HTMLElement | null = document.querySelector('.ant-layout-sider')
      console.log(vnode?.clientWidth)
    },
    SET_SETTINGS_MENU_SIDE(state: any, data) {
      state.menuSide = data.payload
    },
    SET_SETTINGS_FOLD_ICON(state: any, data) {
      state.foldIcon = data.payload
    }
  }
})

export const { SET_SETTINGS_MENU, SET_SETTINGS_FOLD_ICON } = actions

export default StingReducer