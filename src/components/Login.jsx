import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    function handleSubmit() {

    }

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="border rounded-2xl p-8 shadow-2xl">
                <h2 className='text-2xl font-bold mb-4'>Login</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" className='border rounded-lg p-0.5' value={formData.username} onChange={e => setFormData({...formData, [e.target.name]: e.target.value})} required/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" className='border rounded-lg p-0.5' value={formData.password} onChange={e => setFormData({...formData, [e.target.name]: e.target.value})} required/>
                    </div>

                    <button type="submit" className='border rounded-lg px-2 pb-1 bg-blue-500 text-white'>Login</button>
                </form>
                <p>
                    Do not have an account?{" "}
                    <Link to="/register" className="text-blue-500 underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login