import React from 'react'
import { Routes,Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default App
