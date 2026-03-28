import { jwtDecode } from "jwt-decode"
import { Link, useNavigate } from "react-router-dom"

function Header() {
    const navigate = useNavigate()

    const token = localStorage.getItem("token")

    const handleSubmit = () => {
        localStorage.removeItem("token")
        navigate("/")
    }

    const decoded = jwtDecode(token)
    const dashboard = decoded.role === "ADMIN" ? "/admin/dashboard" : "/user/dashboard"
    const tasks = decoded.role === "ADMIN" ? "/admin/tasks" : "/user/tasks"

    return (
        <div className="flex items-center justify-between p-8 bg-gray-800">
            <h1 className="text-white text-2xl">Task Manager</h1>
            <div className="flex gap-8">
                <Link to={dashboard} className="text-white flex justify-center rounded-x p-1 border-2 border-transparent hover:border-b-blue-500 transition-all duration-300">Dashboard</Link>
                <Link to={tasks} className="text-white flex justify-center rounded-x p-1 border-2 border-transparent hover:border-b-green-500 transition-all duration-300">Tasks</Link>
                <button type="submit" onClick={handleSubmit} className="text-white flex justify-center rounded-x p-1 border-2 border-transparent hover:border-b-yellow-500 transition-all duration-300 cursor-pointer">Log out</button>
            </div>
        </div>
    )
}

export default Header