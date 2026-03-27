import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Login from './pages/LoginPage'
import Registration from './pages/RegistrationPage'
import AdminDashboardPage from './pages/admin/AdminDashboardPage'
import AdminTasksPage from './pages/admin/tasks/TasksPage'
import AdminTaskCreatePage from './pages/admin/tasks/TaskCreatePage'
import AdminTaskDetailsPage from './pages/admin/tasks/TaskDetailsPage'
import AdminTaskEditPage from './pages/admin/tasks/TaskEditPage'
import UserDashboardPage from './pages/user/UserDashboardPage'

function App() {
  return (
    <>
      <ToastContainer position='top-right' autoClose={1000}/> 
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/admin/dashboard' element={<AdminDashboardPage/>}/>
        <Route path='/admin/tasks' element={<AdminTasksPage/>}/>
        <Route path='/admin/tasks/new' element={<AdminTaskCreatePage/>}/>
        <Route path="/admin/tasks/:id" element={<AdminTaskDetailsPage/>} />
        <Route path="/admin/tasks/:id/edit" element={<AdminTaskEditPage/>} />

        <Route path='/user/dashboard' element={<UserDashboardPage/>}/>
      </Routes>
    </>
  )
}

export default App
