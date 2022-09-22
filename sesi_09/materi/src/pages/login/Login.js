import { useLocation, useNavigate } from "react-router-dom";

function Login(){
    let navigate = useNavigate()
    let location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const handleLogin = () => {
        localStorage.setItem("token", "login")
        navigate(from, {replace: true})
    }

    return(
        <div>
            <h1>
                Login Page
            </h1>
            <p>
                Klik tombol Login
            </p>
            <button className="login-button"
            onClick={() => handleLogin()}>
                Login
            </button>
        </div>
    )
}


export default Login;