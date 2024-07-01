import { useState } from "react"
import { useLogin } from "../hooks/useLogin"


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isLoading } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try{
        await login(email, password)
        }catch{
            alert(error.message)
        }
    }

    return (
        <form className="login-page" onSubmit={handleSubmit}>
            <h3>LOG IN</h3>
            <div className="form-details">

                <input className="bar"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email} placeholder="Email"
                />

                <input type="password" className="bar"
                    onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />

            </div>
            <div className="login-btn">
                <button className="button-28-login" disabled={isLoading}>Log in</button>
            </div>
            {error && <div className="error">{error}</div>}

        </form>
    )
}

export default Login