import { Link, Outlet } from "react-router-dom";

function MemberLink(){
    return(
        <div>
            <h1>Member page</h1>
            <p>Pilih profil member</p>
            <Link to="Fasich Aulia">Fasich Aulia</Link> | {" "}
            <Link to="Aulia Fasich">Aulia Fasich</Link>
            <Outlet/>
        </div>
    )
}

export default MemberLink;