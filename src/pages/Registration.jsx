import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"

function Registration() {
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const [userForm, setUserForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: ""
    })

    function handleChange(e) {
        setUserForm({
            ...userForm,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            const response = await axios.post(
                "http://localhost:8080/api/auth/registration",
                userForm
            )

            toast.success("Registered successfully!")
            navigate("/login")
        } catch (error) {
            if (error.response.status === 400) {
                const errArray = error.response.data.errors
                const errMap = {}

                errArray.forEach(err => {
                    errMap[err.field] = err.defaultMessage
                });

                setErrors(errMap)
            } else {
                alert(error.response?.data?.error || "Something wrong")
            }
        }
    }

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="border rounded-2xl p-8 shadow-2xl">
                <div className="min-w-sm">
                    <h2 className="text-2xl font-bold mb-4">Registration</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="firstName">First Name:</label>
                            <input type="text" className="border rounded-lg p-0.5" name="firstName" value={userForm.firstName} onChange={handleChange} placeholder="John" required/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="lastName">Last Name:</label>
                            <input type="text" className="border rounded-lg p-0.5" name="lastName" value={userForm.lastName} onChange={handleChange} placeholder="Doe" required/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email">Email:</label>
                            <input type="text" className="border rounded-lg p-0.5" name="email" value={userForm.email} onChange={handleChange} placeholder="example@email.com" required/>
                            {errors.email && <p className="text-red-500">{errors.email}</p>}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="username">Username:</label>
                            <input type="text" className="border rounded-lg p-0.5" name="username" value={userForm.username} onChange={handleChange} required/>
                            {errors.username && <p className="text-red-500">{errors.username}</p>}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password">Password:</label>
                            <input type="password" className="border rounded-lg p-0.5" name="password" value={userForm.password} onChange={handleChange} minLength="8" required/>
                            {errors.password && <p className="text-red-500">{errors.password}</p>}
                        </div>

                        <button type="submit" className="border rounded-lg p-0.5 bg-blue-500 text-white">Register</button>
                    </form>
                </div>
                <div className="">
                    <Link to="/login" className="text-blue-500 mt-2">Back</Link>
                </div>
            </div>
        </div>
    )
}

export default Registration