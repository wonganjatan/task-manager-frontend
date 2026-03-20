import Header from "./Header"
import Sidebar from "./Sidebar"
import Tasks from "./Tasks"
import Footer from "./Footer"

function TasksPage() {

    return (
        <div className="h-screen flex flex-col justify-between">
            <Header/>
            <div className="flex-1 grid grid-cols-[300px_1fr]">
                <Sidebar/>
                <Tasks/>
            </div>
            <Footer/>
        </div>
    )
}

export default TasksPage