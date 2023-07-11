import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import store from './store'
import { Wallpaper } from '@/views/home-page-module/home-style'
import action from '@/shared/actions'
import { FloatButton, Popover } from 'antd'
import { CommentOutlined, SettingOutlined, HeatMapOutlined } from '@ant-design/icons'




import JMSLayout from '@/layout'

let persistor = persistStore(store)

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
    action.setGlobalState({ token: '' })
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
      <PersistGate loading={null} persistor={persistor}>
      <Wallpaper />
        <JMSLayout />
      </PersistGate>
      <FloatButton.Group trigger="click" icon={<SettingOutlined />}>
        <Popover trigger="click" placement="leftTop" arrow={false} content={ <a onClick={() => {}}>Close</a> }>
          <FloatButton icon={<CommentOutlined />} onClick={ () => handleFloatSys() } />
        </Popover>
        <FloatButton icon={<HeatMapOutlined />} onClick={ () => handleFloatNotice() } />
      </FloatButton.Group>
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