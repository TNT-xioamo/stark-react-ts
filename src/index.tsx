import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './style/index.css'

import { registerMicroApps, start } from 'qiankun'

registerMicroApps([
  {
    name: 'vue-quality-education',
    container: '#vue-quality-education',
    entry: 'http://localhost:3100/',
    activeRule: '/vue-quality-education',
  }
])
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
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
