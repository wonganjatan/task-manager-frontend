import axios from "axios"
import { useEffect, useState } from "react"
import TaskCard from "./TaskCard"

function Tasks({ filterData }) {
    const [data, setData] = useState({ tasks: [], tasksCount: 0 })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:8080/api/admin/tasks",
                    { params: filterData }
                )

                setData(res.data)
            } catch (error) {
                
            }
        }

        fetchData()
    }, [filterData])

    return (
        <div className="p-8">
            <div className="flex items-center justify-between pb-8">
                <h1 className="text-4xl">Tasks ({data.tasksCount})</h1>
                <p>Link to create Task</p>
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