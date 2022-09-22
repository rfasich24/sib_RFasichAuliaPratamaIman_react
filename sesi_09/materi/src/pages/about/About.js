import { Link, Outlet } from "react-router-dom";

function About(){
    return(
        <div>
            <h1>About Me</h1>
            <p>Ini adalah halaman About Me</p>
            <Link to="about-program">About My Program</Link> | {" "}
            <Link to="my-profile">My Profile</Link>
            <Outlet/>
        </div>
    )
}

export default About;