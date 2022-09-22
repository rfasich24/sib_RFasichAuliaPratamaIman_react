import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    let navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("token")
        navigate("/")
    }
    return (
        <nav>
            <Link to="/">Home</Link> |{" "} 
            <Link to="/about">About Me</Link> |{" "}
            <Link to="/members">Member</Link> |{" "} 
            <Link to="/items">Item</Link> |{" "}
            {
                localStorage.getItem("token")
                &&
                (<button className="logout-button"
                onClick={() => handleLogout()}>Logout</button>)
            }
            {!localStorage.getItem("token") && <Link to="/login">Login</Link>}
        </nav>
    );
}

export default Navbar;
