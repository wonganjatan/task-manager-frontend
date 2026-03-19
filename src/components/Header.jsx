import { Link } from "react-router-dom"

function Header() {

    return (
        <div className="flex items-center justify-between p-8 bg-gray-800">
            <h1 className="text-white text-2xl">Task Manager</h1>
            <div className="flex gap-8">
                <Link to="/dashboard" className="text-white">Dashboard</Link>
                <Link to="/tasks" className="text-white">Tasks</Link>
            </div>
        </div>
    )
}

export default Header