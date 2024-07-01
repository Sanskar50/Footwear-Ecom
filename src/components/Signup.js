import { useState } from "react"
import { useSignup } from "../hooks/useSignUp"

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup, error, isLoading } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
    }

    return (
        <form className="login-page" onSubmit={handleSubmit}>
            <h3>SIGN IN</h3>
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
                <button className="button-28-login" disabled={isLoading}>Sign in</button>
            </div>

            {error && <div className="error">{error}</div>}

        </form>
    )
}

export default Signup