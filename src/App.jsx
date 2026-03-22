import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Dashboard from './pages/Dashboard'
import TasksPage from './pages/TasksPage'
import TaskCreatePage from './pages/TaskCreatePage'
import TaskDetailsPage from './pages/TaskDetailsPage'
import TaskEditPage from './pages/TaskEditPage'

function App() {
  return (
    <>
      <ToastContainer position='top-right' autoClose={1000}/> 
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/tasks' element={<TasksPage/>}/>
        <Route path='/tasks/new' element={<TaskCreatePage/>}/>
        <Route path="/tasks/:id" element={<TaskDetailsPage/>} />
        <Route path="/tasks/:id/edit" element={<TaskEditPage/>} />
      </Routes>
    </>
  )
}

export default App
