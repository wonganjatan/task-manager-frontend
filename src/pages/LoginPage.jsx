import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { jwtDecode } from 'jwt-decode'

function Login() {
    const navigate = useNavigate()
    const [errors, setErrors] = useState("")
    const [userForm, setUserForm] = useState({
        username: "johndoe",
        password: "Qwerty12!"
    })

    function handleChange(e) {
        const { name, value } = e.target
        setUserForm({
            ...userForm,
            [name]: value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            const response = await axios.post(
                "http://localhost:8080/api/auth/login",
                userForm
            )

            const token = response.data.token

            localStorage.setItem("token", token)

            const decoded = jwtDecode(token)
            console.log(decoded.role)

            toast.success(`Welcome Back ${decoded.sub.toLocaleLowerCase()}`)
            if (decoded.role === "ADMIN") {
                navigate("/admin/dashboard")
            } else {
                navigate("/user/dashboard")
            }

            
        } catch (error) {
            setErrors(error.response?.data?.message)
            console.log(error.response?.data)
        }
    }

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="border rounded-2xl p-8 shadow-2xl">
                <h2 className='text-2xl font-bold mb-4'>Login</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" className='border rounded-lg p-0.5' value={userForm.username} onChange={handleChange} required/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" className='border rounded-lg p-0.5' value={userForm.password} onChange={handleChange} required/>
                    </div>

                    <button type="submit" className='border rounded-lg px-2 pb-1 bg-blue-500 text-white'>Login</button>
                </form>
                {errors && <p className="text-red-500">{errors}</p>}
                <p>
                    Do not have an account?{" "}
                    <Link to="/registration" className="text-blue-500 underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login