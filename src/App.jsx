import React from 'react'
import { Routes,Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Register from './pages/Register'

function App() {
  return (
    <Routes>
      <Route path='/register' element={<Register/>}/>
    </Routes>
  )
}

export default App
