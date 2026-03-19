import { useState } from 'react'
import './App.css'
import Registration from './components/Registration'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      <ToastContainer position='top-right' autoClose={5000}/> 
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
      </Routes>
    </>
  )
}

export default App
