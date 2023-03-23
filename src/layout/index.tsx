import React, { memo } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { SET_SETTINGS_FOLD_ICON } from '@/store/reducers/settings'

import { Layout, theme } from 'antd'
import JMSLayoutContent from '@/layout/content'
import JMSResizebar from './sider/sider-resizebar'
import { DragAside } from './sider/sider-style'
const { Header, Sider, Content, Footer } = Layout

export default memo(function JMSLayout () {
  const { menuSide, foldIcon, themes, collapse }: any = useSelector((state: any) => state?.settings)

  const dispatchFoldIcon = useDispatch()

  const { token: { colorBgContainer }, } = theme.useToken()

  const handleSetIsHovered = (status: Boolean) => {
    dispatchFoldIcon(SET_SETTINGS_FOLD_ICON(status))
  }
  
  return (
    <Layout>
      <Sider className="app-side" trigger={null} theme={themes} width={ menuSide } collapsible collapsed={collapse}  onMouseEnter={() => handleSetIsHovered(true)} onMouseLeave={() => handleSetIsHovered(false)}>
        { foldIcon ? <JMSResizebar /> : '' }
        <DragAside />
      </Sider>
      <Layout>
        <Content><JMSLayoutContent /></Content>
      </Layout>
    </Layout>
  )
})