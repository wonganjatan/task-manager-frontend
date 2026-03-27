import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import TaskForm from "../../../components/tasks/TaskForm"

function TaskEditPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [task, setTask] = useState(null)
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const buttonLabel = 'Edit'

    useEffect(() => {
        const token = localStorage.getItem("token")
        const fetchData = async () => {
            try {
                const [taskResponse, usersResponse] = await Promise.all([
                    axios.get(`http://localhost:8080/api/admin/tasks/${id}`,
                        {
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        }
                    ),
                    axios.get('http://localhost:8080/api/admin/users',
                        {
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        }
                    )
                ])

                setTask(taskResponse.data)
                setUsers(usersResponse.data)
            } catch (error) {
                if (error.response?.status === 401) {
                    toast.error(error.response?.data?.message)

                    return navigate("/")
                } else {
                    toast.error(error)
                }
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [id])

    if (loading) {
        return <p>Loading</p>
    }

    if (!task) {
        return <p>Task not found</p> 
    }

    return (
        <div className="flex h-screen items-center justify-center">
            <TaskForm users={users} initialTask={task} buttonLabel={buttonLabel}/>
        </div>
    )
}

export default TaskEditPage