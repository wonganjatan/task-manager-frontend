import { useState } from 'react'
import './App.css'
import Registration from './components/Registration'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
      </Routes>
    </>
  )
}

export default App
