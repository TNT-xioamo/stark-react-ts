import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { FloatButton } from 'antd'


import JMSEducation from '@/views/microservices/education'
import JMSLayout from '@/layout'

function App() {
  return (
    <Provider store={store}>
      <JMSLayout />
      <FloatButton.Group trigger="hover"><FloatButton /></FloatButton.Group>
      <JMSEducation />
    </Provider>
  )
}

export default App;
