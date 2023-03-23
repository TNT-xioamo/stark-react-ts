import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import store from './store'
import action from '@/shared/actions'
import { FloatButton, Modal } from 'antd'
import { CommentOutlined, SettingOutlined, HeatMapOutlined } from '@ant-design/icons'




import JMSLayout from '@/layout'


function App() {
  
  const [isModalOpen, setIsModalOpen] = useState(false)

  const navigate = useNavigate()
  
  const handleSetIsModalOpen = (status: boolean) => {
    setIsModalOpen(status)
  }

  const handleFloatSys = () => {
    handleSetIsModalOpen(true)
  }

  const handleToVue = () => {
    action.setGlobalState({ token: 'admin' })
    navigate('/vue-quality-education')
  }

  const handleFloatNotice = () => {
    handleToVue()
  }
 
  const handleModalOk = () => {
    handleSetIsModalOpen(false)
  }
  const handleModalCancel = () => {
    handleSetIsModalOpen(false)
  }
  return (
    <Provider store={store}>
      <JMSLayout />
      <FloatButton.Group className='rotate-scale-up_hover' trigger="click" icon={<SettingOutlined />}>
        <FloatButton icon={<CommentOutlined />} onClick={ () => handleFloatSys() } />
        <FloatButton icon={<HeatMapOutlined />} onClick={ () => handleFloatNotice() } />
      </FloatButton.Group>
      <Modal open={isModalOpen} onOk={handleModalOk} onCancel={handleModalCancel}></Modal>
      <FloatButton.BackTop />
    </Provider>
  )
}

export default App;


  // "proxy": {
  //   "/api/**": {
  //     "target": "http://192.168.28.56:3100/api",
  //     "changeOrigin": true
  //   }
  // }