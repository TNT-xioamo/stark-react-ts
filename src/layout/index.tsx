import React, { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Layout, theme, Button } from 'antd'
import JMSLayoutContent from '@/layout/content'
import JMSResizebar from './sider/sider-resizebar'

const { Header, Sider, Content, Footer } = Layout

export default memo(function JMSLayout () {

  const [collapsed, setCollapsed] = useState(false)

  const { token: { colorBgContainer }, } = theme.useToken()
  

  return (
    <Layout>
      <Sider trigger={null} theme={'light'} width={ 254 } collapsible collapsed={collapsed} >
        <JMSResizebar />
      </Sider>
      <Layout>
        {/* <Header style={{ padding: 0, background: colorBgContainer }} ><Button onClick={() => handleToVue()}>微前端Vue</Button></Header> */}
        <Content><JMSLayoutContent /></Content>
        {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer> */}
      </Layout>
    </Layout>
  )
})

  // "proxy": {
  //   "/api/**": {
  //     "target": "http://192.168.28.56:3100/api",
  //     "changeOrigin": true
  //   }
  // }