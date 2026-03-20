function TaskCard({ task }) {

    return (
        <div className="flex flex-col justify-between border rounded-2xl w-60 h-60 p-4 shadow-2xl bg-linear-to-br from-indigo-200 via-purple-200 to-pink-200">
            <div>
                <p className="text-xl font-bold">{task.title}</p>
                <p className="h-18"><strong>Description: </strong>{task.description}</p>
                <p><strong>Priority: </strong> {task.priority}</p>
                <p><strong>Status: </strong>{task.status}</p>
                <p>
                    <strong>Assigned to: </strong>
                    {task.assignedUser ? `${task.assignedUser.firstName}  ${task.assignedUser.lastName}` : "Unassigned"}
                </p>
                <p><strong>Due: </strong>{task.dueDate}</p>
            </div>
            <div className="flex items-center justify-center">
                <p>View</p>
            </div>
        </div>
    )
}

export default TaskCard