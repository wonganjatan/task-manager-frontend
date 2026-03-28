import { useState } from "react"

function Sidebar({ onFilter}) {
    const [searchTasks, setSearchTasks] = useState({
        priority: "",
        status: "",
        dueDate: ""
    })

    function handleChange(e) {
        setSearchTasks({
            ...searchTasks,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        onFilter(searchTasks)
    }

    return (
        <div className="p-8">
            <form onSubmit={handleSubmit} className="border rounded-2xl flex-1 h-auto p-4 space-y-2 shadow-2xl">
                <div className="flex items-center space-x-2">
                    <label htmlFor="priority">Priority:</label>
                    <select name="priority" id="priority" className="border rounded p-1 flex-1" value={searchTasks.priority} onChange={handleChange}>
                        <option value=""></option>
                        <option value="LOW">LOW</option>
                        <option value="MEDIUM">MEDIUM</option>
                        <option value="HIGH">HIGH</option>
                    </select>
                </div>
                <div className="flex items-center space-x-2">
                    <label htmlFor="status">Status:</label>
                    <select name="status" id="status" className="border rounded p-1 flex-1" value={searchTasks.status} onChange={handleChange}>
                        <option value=""></option>
                        <option value="TODO">TODO</option>
                        <option value="IN_PROGRESS">IN_PROGRESS</option>
                        <option value="DONE">DONE</option>
                    </select>
                </div>
                <div className="flex items-center space-x-2">
                    <label htmlFor="dueDate">Due Date:</label>
                    <select name="dueDate" id="dueDate" className="border rounded p-1 flex-1" value={searchTasks.dueDate} onChange={handleChange}>
                        <option value=""></option>
                        <option value="ASCENDING">ASCENDING</option>
                        <option value="DESCENDING">DESCENDING</option>
                    </select>
                </div>

                <div className="flex justify-end pt-2">
                    <button type="submit" className='border border-blue-500 rounded-lg px-2 pb-1 bg-blue-500 text-white cursor-pointer hover:bg-blue-600 transition-colors'>Search</button>
                </div>
            </form>
        </div>
    )
}

export default Sidebar