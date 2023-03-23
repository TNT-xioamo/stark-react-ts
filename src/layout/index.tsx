import React, { memo, MouseEvent, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { SET_SETTINGS_FOLD_ICON, SET_SETTINGS_MENU_SIDE } from '@/store/reducers/settings'

import { Layout, theme } from 'antd'
import JMSLayoutContent from '@/layout/content'
import JMSResizebar from './sider/sider-resizebar'
import { DragAside } from './sider/sider-style'
const { Sider, Content,  } = Layout

export default memo(function JMSLayout () {
  const { menuSide, foldIcon, themes, collapse }: any = useSelector((state: any) => state?.settings)
  const [draggable, setDraggable] = useState(false)

  const dispatchFoldIcon = useDispatch()
  const dispatchSide = useDispatch()

  const { token: { colorBgContainer }, } = theme.useToken()

  const handleSetIsHovered = (status: Boolean) => {
    dispatchFoldIcon(SET_SETTINGS_FOLD_ICON(status))
  }
  
  const handleMouseDown = (e: MouseEvent) => {
    setDraggable(true)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!draggable) return
    if (e.screenX > window.screen.availWidth / 3 || e.screenX < 20) return
    dispatchSide(SET_SETTINGS_MENU_SIDE(e.screenX))
  }

  const handleMouseUp = (e: MouseEvent) => {
    setDraggable(false)
  }

  return (
    <Layout onMouseMove={event => handleMouseMove(event)} onMouseUp={event => handleMouseUp(event)}>
      <Sider className="app-side" trigger={null} theme={themes} width={ menuSide } collapsible collapsed={collapse}  onMouseEnter={() => handleSetIsHovered(true)} onMouseLeave={() => handleSetIsHovered(false)}>
        { foldIcon ? <JMSResizebar /> : '' }
        <DragAside onMouseDown={event => handleMouseDown(event)} />
      </Sider>
      <Layout>
        <Content><JMSLayoutContent /></Content>
      </Layout>
    </Layout>
  )
})