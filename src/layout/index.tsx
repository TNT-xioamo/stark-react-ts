import React, { memo, MouseEvent, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { SET_SETTINGS_FOLD_ICON } from '@/store/reducers/settings'

import { Layout, theme } from 'antd'
import JMSLayoutContent from '@/layout/content'
import JMSResizebar from './sider/sider-resizebar'
import { DragAside } from './sider/sider-style'
const { Sider, Content,  } = Layout

export default memo(function JMSLayout () {
  const { menuSide, foldIcon, themes, collapse }: any = useSelector((state: any) => state?.settings)
  const [draggable, setDraggable] = useState(false)

  const dispatchFoldIcon = useDispatch()
  const { token: { colorBgContainer }, } = theme.useToken()

  const handleSetIsHovered = (status: Boolean) => {
    dispatchFoldIcon(SET_SETTINGS_FOLD_ICON(status))
  }
  
  const handleMouseDown = (e: MouseEvent) => {
    setDraggable(true)
    console.log('handleMouseDown', e)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!draggable) return
    console.error('handleMouseMove', e)
  }

  const handleMouseUp = (e: MouseEvent) => {
    setDraggable(false)
    console.error('handleMouseUp', e)
  }

  return (
    <Layout>
      <Sider className="app-side" trigger={null} theme={themes} width={ menuSide } collapsible collapsed={collapse}  onMouseEnter={() => handleSetIsHovered(true)} onMouseLeave={() => handleSetIsHovered(false)}>
        { foldIcon ? <JMSResizebar /> : '' }
        <DragAside onMouseDown={event => handleMouseDown(event)}  onMouseMove={event => handleMouseMove(event)} onMouseUp={event => handleMouseUp(event)} />
      </Sider>
      <Layout>
        <Content><JMSLayoutContent /></Content>
      </Layout>
    </Layout>
  )
})