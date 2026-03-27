import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

function TaskForm({ users, initialTask, buttonLabel }) {

    const navigate = useNavigate()
    const [taskForm, setTaskForm] = useState({
        title: initialTask?.title || "",
        description: initialTask?.description || "",
        priority: initialTask?.priority || "LOW",
        status: initialTask?.status || "TODO",
        assignedUserId: initialTask?.assignedUserId || "",
        dueDate: ""
    })
    const [errors, setErrors] = useState({
        title: "",
        description: "",
        dueDate: ""
    })

    function handleChange(e) {
        const { name, value } = e.target
        setTaskForm({
            ...taskForm,
            [name]: value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()

        const token = localStorage.getItem("token")

        try {
            if (initialTask) {
                const response = await axios.put(
                    `http://localhost:8080/api/admin/tasks/${initialTask.id}`, 
                    taskForm,
                        {
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        })

                toast.success("Task edited Successfully")
            } else {
                const response = await axios.post(
                    "http://localhost:8080/api/admin/tasks/new", 
                    taskForm,
                        {
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        })
                    
                toast.success("Task created successfully")
            }

            navigate("/admin/tasks")
        } catch (error) {
            if (error.response?.data?.errors != null) {
                const errArray = error.response.data.errors
                const errMap = {}

                errArray.forEach(err => {
                    errMap[err.field] = err.defaultMessage
                });

                setErrors(errMap)
            } else if (error.response?.data?.error != null) {
                setErrors({...errors, dueDate: error.response.data.error})
            } else if (error.response?.status === 401) {
                toast.error(error.response?.data?.message)

                return navigate("/")
            } else {
                toast.error(error)
            }
        }
    }

    return (
        <div className="border rounded-2xl p-8 shadow-2xl">
            <h1 className="pb-8">{buttonLabel} Task</h1>
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
                    <label htmlFor="assignedUserId">Assign to:</label>
                    <select name="assignedUserId" id="assignedUserId" value={taskForm.assignedUserId} onChange={handleChange} className="border rounded p-1 flex-1">
                        <option value="">Unassigned</option>
                        {users.map(user => {
                            return (
                                <option key={user.id} value={user.id}>{user.firstName + ' ' + user.lastName}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="dueDate">Due Date:</label>
                    <input type="datetime-local" name="dueDate" id="dueDate"  value={taskForm.dueDate} onChange={handleChange} className="border rounded-lg p-0.5"/>
                    {errors.dueDate && <p className="text-red-500">{errors.dueDate}</p>}
                </div>

                <button type="submit">{buttonLabel}</button>
            </form>
        </div>
    )
    
}

export default TaskForm