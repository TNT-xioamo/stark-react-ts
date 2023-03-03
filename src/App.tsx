import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { FloatButton } from 'antd'


import JMSEducation from './views/microservices/education'

function App() {
  return (
    <Provider store={store}>
      
      <FloatButton.Group trigger="hover"><FloatButton /></FloatButton.Group>
      <JMSEducation />
    </Provider>
  )
}

export default App;
