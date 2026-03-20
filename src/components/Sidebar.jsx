import { useState } from "react"

function Sidebar() {
    const [filterData, setFilterData] = useState({
        priority: "",
        status: "",
        dueDate: ""
    })
    return (
        <div className="p-8">
            <div className="border rounded-2xl flex-1 h-auto p-4 space-y-2">
                <div className="flex items-center space-x-2">
                    <label htmlFor="priority">Priority:</label>
                    <select name="priority" id="priority" className="border rounded p-1 flex-1">
                        <option value=""></option>
                        <option value="LOW">LOW</option>
                        <option value="MEDIUM">MEDIUM</option>
                        <option value="HIGH">HIGH</option>
                    </select>
                </div>
                <div className="flex items-center space-x-2">
                    <label htmlFor="status">Status:</label>
                    <select name="status" id="status" className="border rounded p-1 flex-1">
                        <option value=""></option>
                        <option value="TODO">TODO</option>
                        <option value="IN_PROGRESS">IN_PROGRESS</option>
                        <option value="DONE">DONE</option>
                    </select>
                </div>
                <div className="flex items-center space-x-2">
                    <label htmlFor="dueDate">Due Date:</label>
                    <select name="dueDate" id="dueDate" className="border rounded p-1 flex-1">
                        <option value=""></option>
                        <option value="ASCENDING">ASCENDING</option>
                        <option value="DESCENDING">DESCENDING</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Sidebar