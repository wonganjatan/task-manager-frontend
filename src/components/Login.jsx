import { Link } from 'react-router-dom'

function Login() {
    return (
        <div class="">
            <div class="">
                <h2>Login</h2>
                <form>
                    <div class="form-group">
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" required/>
                    </div>
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" required/>
                    </div>

                    <button type="submit">Login</button>
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