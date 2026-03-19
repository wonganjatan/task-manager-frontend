import { useState } from 'react'
import './App.css'
import Registration from './components/Registration'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import { ToastContainer } from 'react-toastify'
import Dashboard from './components/Dashboard'
import TasksPage from './components/TasksPage'

function App() {
  return (
    <>
      <ToastContainer position='top-right' autoClose={5000}/> 
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/tasks' element={<TasksPage/>}/>
      </Routes>
    </>
  )
}

export default App
