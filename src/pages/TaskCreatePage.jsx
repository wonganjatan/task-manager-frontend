import { useEffect, useState } from "react"
import TaskForm from "../components/TaskForm"
import { toast } from "react-toastify"
import axios from "axios"

function TaskCreatePage() {

    const [users, setUsers] = useState([])

    useEffect(() => {

        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/admin/users")
                setUsers(response.data)
                console.log(users)
            } catch (error) {
                toast.error(error)
            }
        }
       
        fetchUsers()
    }, [])

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="border rounded-2xl p-8 shadow-2xl">
                <h1 className="pb-8">Create Task</h1>
                <TaskForm users={users}/>
            </div>
        </div>
    )
}

export default TaskCreatePage