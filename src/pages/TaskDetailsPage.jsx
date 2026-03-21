import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"

function TaskDetailsPage() {
    const { id } = useParams()
    const [task, setTask] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {

        const fetchTaskById = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/admin/tasks/${id}`)
                setTask(response.data)
            } catch (error) {
                toast.error(error)
            } finally {
                setLoading(false)
            }
        }

        fetchTaskById()
    }, [id])

    if (loading) {
        return <p>Loading...</p>
    }

    if (!task) {
        return <p>Task not found</p>
    }

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-between border rounded-2xl w-120 h-120 p-4 shadow-2xl bg-linear-to-br from-indigo-200 via-purple-200 to-pink-200">
                <div>
                    <p className="text-xl font-bold">{task.title}</p>
                    <p className="h-18"><strong>Description: </strong>{task.description}</p>
                    <p><strong>Priority: </strong> {task.priority}</p>
                    <p><strong>Status: </strong>{task.status}</p>
                    <p>
                        <strong>Assigned to: </strong>
                        {task.assignedUser ? `${task.assignedUser.firstName}  ${task.assignedUser.lastName}` : "Unassigned"}
                    </p>
                    <p><strong>Due: </strong>{task.dueDate}</p>
                </div>
                <div className="flex items-center justify-center">
                    <div>
                        <Link to={'/tasks'}>Back</Link>
                    </div>
                    <div>
                        <Link to={`/tasks/${id}/edit`}>Edit</Link>
                        <button>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskDetailsPage