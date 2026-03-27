import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import axios from "axios"
import TaskForm from "../../../components/tasks/TaskForm"


function AdminTaskCreatePage() {

    const [users, setUsers] = useState([])
    const buttonLabel = 'Create'

    useEffect(() => {

        const token = localStorage.getItem("token")

        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/admin/users",
                        {
                            headers : {
                                Authorization: `Bearer ${token}`
                            }
                        })
                        
                setUsers(response.data)
            } catch (error) {
                toast.error(error.response?.data)
            }
        }
       
        fetchUsers()
    }, [])

    return (
        <div className="flex h-screen items-center justify-center">
            <TaskForm users={users} buttonLabel={buttonLabel}/>
        </div>
    )
}

export default AdminTaskCreatePage