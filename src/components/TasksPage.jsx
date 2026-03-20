import { useState } from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Tasks from "./Tasks"
import Footer from "./Footer"

function TasksPage() {

    const [filterData, setFilterData] = useState({
        priority: "",
        status: "",
        dueDate: ""
    })

    return (
        <div className="h-screen flex flex-col justify-between">
            <Header/>
            <div className="flex-1 grid grid-cols-[300px_1fr]">
                <Sidebar onFilter={setFilterData}/>
                <Tasks filterData={filterData}/>
            </div>
            <Footer/>
        </div>
    )
}

export default TasksPage