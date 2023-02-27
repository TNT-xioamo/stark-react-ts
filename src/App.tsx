import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { Link, BrowserRouter } from 'react-router-dom'
import JMSLayout from './layout'

function App() {
  return (
    <Provider store={store}>
      <JMSLayout />
    </Provider>
    // <div className="App">
    //   <BrowserRouter>
    //     <h3><Link to="/vue-quality-education">微前端Vue</Link></h3>
    //   </BrowserRouter>
    //   <div id='vue-quality-education' />
    // </div>
  )
}

export default App;
