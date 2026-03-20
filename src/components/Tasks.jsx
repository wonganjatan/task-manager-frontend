import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import TaskCard from "./TaskCard"

function Tasks({ filterData }) {
    const [data, setData] = useState({ tasks: [], tasksCount: 0 })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8080/api/admin/tasks",
                    { params: filterData }
                )

                setData(response.data)
            } catch (error) {
                toast.error(error)
            }
        }

        fetchData()
    }, [filterData])

    return (
        <div className="p-8">
            <div className="flex items-center justify-between pb-8">
                <h1 className="text-4xl">Tasks ({data.tasksCount})</h1>
                <Link to="/tasks/new">Create Task</Link>
            </div>
            <div className="flex flex-wrap gap-4">
                {data.tasks.map(task => (
                    <TaskCard key={task.id} task={task}/>
                ))}
            </div>
        </div>
    )
}

export default Tasks