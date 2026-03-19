import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

function Dashboard() {
    const [tasksCount, setTasksCount] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            try {
            const res = await axios.get(
                "http://localhost:8080/api/admin/dashboard")

            setTasksCount(res.data.tasksCount)
            console.log(res.data.tasksCount)
            } catch (error) {
                toast.error("Error: getTasksCount")
            }
        }

        fetchData()
    }, [])

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <div className="border rounded-2xl p-8">
                <div>
                    <h1 className="text-4xl">Tasks: {tasksCount}</h1>
                </div>
                <div>
                    {/* <Link to="/tasks">Tasks</Link> */}
                </div>
            </div>
        </div>
    )
}

export default Dashboard