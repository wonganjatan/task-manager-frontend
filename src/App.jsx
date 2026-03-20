import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Dashboard from './pages/Dashboard'
import TasksPage from './pages/TasksPage'
import TaskCreatePage from './pages/TaskCreatePage'

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
        <Route path='/tasks/new' element={<TaskCreatePage/>}/>
      </Routes>
    </>
  )
}

export default App
