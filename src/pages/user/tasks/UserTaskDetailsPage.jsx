import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"

function UserTaskDetailsPage() {
    const { id } = useParams()
    const [task, setTask] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    const token = localStorage.getItem("token")
    
    useEffect(() => {

        const fetchTaskById = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/user/tasks/${id}`,
                        {
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        })
                            
                setTask(response.data)
            } catch (error) {
                if (error.response?.status === 401) {
                    toast.error(error.response?.data?.message)
                    navigate("/")
                } else {
                    toast.error(error)
                }
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

    const handleSubmit = async (newStatus) => {
        
        try {
            const response = await axios.patch(
                `http://localhost:8080/api/user/tasks/${id}/status`,
                { status: newStatus },
                { headers: {
                    Authorization: `Bearer ${token}`
                }}
            )

            setTask(response.data)
            toast.success("Task successfully updated")
            navigate("/user/tasks")
        } catch (error) {
            console.log(error.response?.data)
        }
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
                        <Link to={'/user/tasks'}>Back</Link>
                    </div>
                    <div>
                        <button type="submit" onClick={() => handleSubmit("TODO")}>TODO</button>
                        <button type="submit" onClick={() => handleSubmit("IN_PROGRESS")}>IN_PROGRESS</button>
                        <button type="submit" onClick={() => handleSubmit("DONE")}>DONE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserTaskDetailsPage