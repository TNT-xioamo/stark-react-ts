import React, { memo, useState } from 'react'
import { Layout, Menu, theme } from 'antd'

import { Link, BrowserRouter } from 'react-router-dom'

const { Header, Sider, Content, Footer } = Layout


export default memo(function JMSLayout () {
  const [collapsed, setCollapsed] = useState(false)
  const { token: { colorBgContainer }, } = theme.useToken()
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}></Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} >
          <BrowserRouter><Link to="/vue-quality-education">微前端Vue</Link></BrowserRouter>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <BrowserRouter><div id='vue-quality-education' /></BrowserRouter>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
})