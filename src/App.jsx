import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Login from './pages/LoginPage'
import Registration from './pages/RegistrationPage'
import AdminDashboard from './pages/admin/AdminDashboardPage'
import TasksPage from './pages/admin/tasks/TasksPage'
import TaskCreatePage from './pages/admin/tasks/TaskCreatePage'
import TaskDetailsPage from './pages/admin/tasks/TaskDetailsPage'
import TaskEditPage from './pages/admin/tasks/TaskEditPage'
import UserDashboard from './pages/user/UserDashboardPage'

function App() {
  return (
    <>
      <ToastContainer position='top-right' autoClose={1000}/> 
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
        <Route path='/tasks' element={<TasksPage/>}/>
        <Route path='/tasks/new' element={<TaskCreatePage/>}/>
        <Route path="/tasks/:id" element={<TaskDetailsPage/>} />
        <Route path="/tasks/:id/edit" element={<TaskEditPage/>} />

        <Route path='/user/dashboard' element={<UserDashboard/>}/>
      </Routes>
    </>
  )
}

export default App
