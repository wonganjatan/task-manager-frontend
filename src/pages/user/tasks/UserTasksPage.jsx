import { useState } from "react"
import Header from "../../../components/layouts/Header"
import Sidebar from "../../../components/layouts/Sidebar"
import Tasks from "../../../components/tasks/Tasks"
import Footer from "../../../components/layouts/Footer"

function UserTasksPage() {

    const [filterTasks, setFilterTasks] = useState({
        priority: "",
        status: "",
        dueDate: ""
    })

    return (
        <div className="h-screen flex flex-col justify-between">
            <Header/>
            <div className="flex-1 grid grid-cols-[300px_1fr]">
                <Sidebar onFilter={setFilterTasks}/>
                <Tasks filterTasks={filterTasks}/>
            </div>
            <Footer/>
        </div>
    )
}

export default UserTasksPage