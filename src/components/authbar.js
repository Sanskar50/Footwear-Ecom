import { Link, Router, Routes, BrowserRouter } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext'

const AuthBar = () => {

    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return (
        <div className="authbar">
            <div className="movebar">
                <marquee scrollamount="10">NEW DROP-THE DEBRIES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2M+ HAPPY CUSTOMERS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7 DAYS FREE EXCHANGE</marquee>
            </div>
            <div className="topButtons">
                <nav>
                    {user && (
                        <div >
                            <span className='user-email'>{user.email}</span>
                            <button  className="logout-btn" onClick={handleClick}>Log out</button>
                        </div>
                    )}
                    {!user && (
                        <div>
                            <Link className="navLink" to="/login">Login</Link>
                            <Link className="navLink" to="/signup">Signup</Link>
                        </div>
                    )}
                </nav>
            </div>
        </div>
    );
}

export default AuthBar;