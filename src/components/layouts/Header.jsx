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
                <Link to={dashboard} className="text-white">Dashboard</Link>
                <Link to={tasks} className="text-white">Tasks</Link>
                <button type="submit" onClick={handleSubmit}>Log out</button>
            </div>
        </div>
    )
}

export default Header