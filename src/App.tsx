import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h3><Link to="/vue-quality-education">微前端Vue</Link></h3>
      </BrowserRouter>
      <div id='vue-quality-education' />
    </div>
  )
}

export default App;
