import React, { useState } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { FloatButton, Modal } from 'antd'
import { CommentOutlined, SettingOutlined, HeatMapOutlined } from '@ant-design/icons'



import JMSEducation from '@/views/microservices/education'
import JMSLayout from '@/layout'


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const handleSetIsModalOpen = (status: boolean) => {
    setIsModalOpen(status)
  }

  const handleFloatSys = () => {
    handleSetIsModalOpen(true)
  }
  const handleFloatNotice = () => {}

  const handleModalOk = () => {
    handleSetIsModalOpen(false)
  }
  const handleModalCancel = () => {
    handleSetIsModalOpen(false)
  }
  return (
    <Provider store={store}>
      <JMSLayout />
      <FloatButton.Group trigger="click" icon={<SettingOutlined />}>
        <FloatButton icon={<CommentOutlined />} onClick={ () => handleFloatSys() } />
        <FloatButton icon={<HeatMapOutlined />} onClick={ () => handleFloatNotice() } />
      </FloatButton.Group>
      <Modal open={isModalOpen} onOk={handleModalOk} onCancel={handleModalCancel}></Modal>
      <JMSEducation />
      <FloatButton.BackTop />
    </Provider>
  )
}

export default App;
