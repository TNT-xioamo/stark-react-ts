import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './style/index.css'
import './style/animista.css'
import './style/variable.css'
import { ConfigProvider } from 'antd'

import { registerMicroApps, loadMicroApp , start, MicroApp } from 'qiankun'

// const loadMicroApp = async () => {
  
// }
// loadMicroApp([
//   {
//     name: 'vue-quality-education',
//     container: '#vue-quality-education',
//     entry: '//127.0.0.1:3100/',
//     activeRule: '/vue-quality-education',
//   },
//   {
//     name: 'Trainone',
//     container: '#subsystem-trainOne',
//     entry: '//127.0.0.1:9528/',
//     activeRule: '/subsystem-trainOne',
//   }
// ])
// 启动
start({
  sandbox: {
    // 样式隔离特性
    experimentalStyleIsolation: true,
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <ConfigProvider direction="ltr" theme={{ token: { colorPrimary: '#00b96b' }, }} componentSize={'small'}>
        <App />
      </ConfigProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
