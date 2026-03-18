import { useState } from "react"
import { Link } from 'react-router-dom'

function Registration() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: ""
    })

    function handleSubmit() {
        alert("hello")
    }

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="border rounded-2xl p-8 shadow-2xl">
                <div className="">
                    <h2 className="text-2xl font-bold mb-4">Registration</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="firstName">First Name:</label>
                            <input className="border rounded-lg p-0.5" name="firstName" value={formData.firstName} onChange={e => setFormData({...formData, [e.target.name]: e.target.value})} placeholder="John" required/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="lastName">Last Name:</label>
                            <input className="border rounded-lg p-0.5" name="lastName" value={formData.lastName} onChange={e => setFormData({...formData, [e.target.name]: e.target.value})} placeholder="Doe" required/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email">Email:</label>
                            <input className="border rounded-lg p-0.5" name="email" value={formData.email} onChange={e => setFormData({...formData, [e.target.name]: e.target.value})} placeholder="example@email.com" required/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="username">Username:</label>
                            <input className="border rounded-lg p-0.5" name="username" value={formData.username} onChange={e => setFormData({...formData, [e.target.name]: e.target.value})} required/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password">Password:</label>
                            <input className="border rounded-lg p-0.5" name="password" value={formData.password} onChange={e => setFormData({...formData, [e.target.name]: e.target.value})} minLength="8" required/>
                        </div>

                        <button type="submit" className="border rounded-lg p-0.5" name="">Register</button>
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