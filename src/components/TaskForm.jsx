import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

function TaskForm({ users }) {

    const navigate = useNavigate()
    const [taskForm, setTaskForm] = useState({
        title: "",
        description: "",
        priority: "LOW",
        status: "TODO",
        assignedUser: null,
        dueDate: ""
    })
    const [errors, setErrors] = useState({
        title: "",
        description: "",
        dueDate: ""
    })

    function handleChange(e) {
        setTaskForm({
            ...taskForm,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            const response = await axios.post(
                "http://localhost:8080/api/admin/tasks/new", 
                taskForm
            )

            toast.success("Task created successfully")
            navigate("/tasks")
        } catch (error) {
            if (error.response.data.errors != null) {
                const errArray = error.response.data.errors
                const errMap = {}

                errArray.forEach(err => {
                    errMap[err.field] = err.defaultMessage
                });

                setErrors(errMap)
            } else if (error.response.data.error != null) {
                setErrors({...errors, dueDate: error.response.data.error})
            } else {
                toast.error(error)
            }
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" id="title" value={taskForm.title} onChange={handleChange} className="border rounded-lg p-0.5" minLength="1" required/>
                {errors.title && <p className="text-red-500">{errors.title}</p>}
            </div>
            <div className="flex flex-col">
                <label htmlFor="description">Description:</label>
                <input type="text" name="description" id="description"  value={taskForm.description} onChange={handleChange} className="border rounded-lg p-0.5"  minLength="1" required/>
                {errors.description && <p className="text-red-500">{errors.description}</p>}
            </div>
            <div className="flex items-center space-x-2">
                <label htmlFor="priority">Priority:</label>
                <select name="priority" id="priority" value={taskForm.priority} onChange={handleChange} className="border rounded p-1 flex-1">
                    <option value="LOW">LOW</option>
                    <option value="MEDIUM">MEDIUM</option>
                    <option value="HIGH">HIGH</option>
                </select>
            </div>
            <div className="flex items-center space-x-2">
                <label htmlFor="status">Status:</label>
                <select name="status" id="status" value={taskForm.status} onChange={handleChange} className="border rounded p-1 flex-1">
                    <option value="TODO">TODO</option>
                    <option value="IN_PROGRESS">IN_PROGRESS</option>
                    <option value="DONE">DONE</option>
                </select>
            </div>
            <div className="flex items-center space-x-2">
                <label htmlFor="assignedUser">Assign to:</label>
                <select name="assignedUser" id="assignedUser" value={taskForm.assignedUser} onChange={handleChange} className="border rounded p-1 flex-1">
                    <option value={null}>Unassigned</option>
                    {users.map(user => {
                        return (
                            <option key={user.id} value={user.firstName + ' ' + user.lastName}>{user.firstName + ' ' + user.lastName}</option>
                        )
                    })}
                </select>
            </div>
            <div className="flex flex-col">
                <label htmlFor="dueDate">Due Date:</label>
                <input type="datetime-local" name="dueDate" id="dueDate"  value={taskForm.dueDate} onChange={handleChange} className="border rounded-lg p-0.5"/>
                {errors.dueDate && <p className="text-red-500">{errors.dueDate}</p>}
            </div>

            <button type="submit">Create Task</button>
        </form>
    )
    
}

export default TaskForm