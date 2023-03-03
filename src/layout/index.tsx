import React, { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import action from '../shared/actions'
import { Layout, Button, theme } from 'antd'
import JMSLayoutContent from '@/layout/content'




const { Header, Sider, Content, Footer } = Layout


export default memo(function JMSLayout () {

  const [collapsed, setCollapsed] = useState(false)

  const { token: { colorBgContainer }, } = theme.useToken()
  const navigate = useNavigate()
  
  const handleToVue = () => {
    action.setGlobalState({ token: 'admin' })
    navigate('/vue-quality-education')
  }
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}></Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} >
          {/* <Button onClick={() => handleToVue()}>微前端Vue</Button> */}
        </Header>
        <Content><JMSLayoutContent /></Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
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