import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import TaskCard from "./TaskCard"
import { jwtDecode } from "jwt-decode"

function Tasks({ filterTasks }) {
    const navigate = useNavigate()
    const [tasks, setTasks] = useState([])
    const [totalTasks, setTotalTasks] = useState(0)

    const token = localStorage.getItem("token")
    const decoded = jwtDecode(token)

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                if (decoded.role === "ADMIN") {
                    const response = await axios.get(
                        "http://localhost:8080/api/admin/tasks",
                        { params: filterTasks,
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        }
                    )

                    setTasks(response.data.tasks)
                    setTotalTasks(response.data.totalTasks)
                } else {
                    const response = await axios.get(
                        "http://localhost:8080/api/user/tasks",
                        { params: filterTasks,
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        }
                    )

                    setTasks(response.data.myTasks)
                    setTotalTasks(response.data.totalTasks)
                }
                
            } catch (error) {
                if (error.response?.status === 401) {
                    toast.error(error.response?.data?.message)
                    return navigate("/")
                } else {
                    toast.error(error)
                }
            }
        }

        fetchTasks()
    }, [filterTasks])

    return (
        <div className="p-8">
            <div className="flex items-center justify-between pb-8">
                <h1 className="text-4xl">Tasks ({totalTasks})</h1>
                {decoded.role === "ADMIN" && <Link to="/admin/tasks/new" className='text-white py-1 border border-green-500 rounded-lg px-2 pb-1 bg-green-500 hover:bg-green-600 transition-colors duration-300'>Create Task</Link>}
            </div>
            <div className="flex flex-wrap gap-4">
                {tasks.map(task => (
                    <TaskCard key={task.id} task={task}/>
                ))}
            </div>
        </div>
    )
}

export default Tasks