import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { Link, useNavigate } from "react-router-dom"

function Dashboard() {
    const navigate = useNavigate()
    const [totalTasks, setTotalTasks] = useState(0)

    useEffect(() => {
        const token = localStorage.getItem("token")

        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8080/api/admin/dashboard",
                    { headers : {
                        Authorization: `Bearer ${token}`
                    }})
                
                if (response.status === 200) {
                    setTotalTasks(response.data.totalTasks)
                }
            } catch (error) {
                if (error.response?.status === 401) {
                    toast.error(error.response?.data?.message)
                    
                    return navigate("/")
                } else {
                    toast.error(error.response?.data?.message)
                }
            }
        }

        fetchData()
    }, [])

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <div className="border rounded-2xl p-8">
                <div>
                    <h1 className="text-4xl">Tasks: {totalTasks}</h1>
                </div>
                <div className="flex items-center justify-center pt-4">
                    <Link to="/tasks" className='border rounded-lg px-2 pb-1 bg-blue-500 text-white'>Tasks</Link>
                </div>
            </div>
        </div>
    )
}

export default Dashboard