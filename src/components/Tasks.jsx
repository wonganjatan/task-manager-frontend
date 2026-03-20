import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import TaskCard from "./TaskCard"

function Tasks({ filterTasks }) {
    const [tasks, setTasks] = useState([])
    const [totalTasks, setTotalTasks] = useState(0)

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8080/api/admin/tasks",
                    { params: filterTasks }
                )

                setTasks(response.data.tasks)
                setTotalTasks(response.data.totalTasks)
            } catch (error) {
                toast.error(error)
            }
        }

        fetchTasks()
    }, [filterTasks])

    return (
        <div className="p-8">
            <div className="flex items-center justify-between pb-8">
                <h1 className="text-4xl">Tasks ({totalTasks})</h1>
                <Link to="/tasks/new">Create Task</Link>
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