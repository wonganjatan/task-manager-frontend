import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Login from './pages/LoginPage'
import Registration from './pages/RegistrationPage'
import AdminDashboardPage from './pages/admin/AdminDashboardPage'
import AdminTasksPage from './pages/admin/tasks/AdminTasksPage'
import AdminTaskCreatePage from './pages/admin/tasks/AdminTaskCreatePage'
import AdminTaskDetailsPage from './pages/admin/tasks/AdminTaskDetailsPage'
import AdminTaskEditPage from './pages/admin/tasks/AdminTaskEditPage'
import UserDashboardPage from './pages/user/UserDashboardPage'
import UserTasksPage from './pages/user/tasks/UserTasksPage'
import UserTaskDetailsPage from './pages/user/tasks/UserTaskDetailsPage'

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
        <Route path='/user/tasks' element={<UserTasksPage/>}/>
        <Route path="/user/tasks/:id" element={<UserTaskDetailsPage/>} />
      </Routes>
    </>
  )
}

export default App
