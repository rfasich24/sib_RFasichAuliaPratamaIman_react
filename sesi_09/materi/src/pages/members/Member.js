import { useParams } from "react-router-dom";

function Member(){
    let params = useParams()
    
    return(
        <div>
            <h3>{params.memberName}</h3>
            <p>Ini adalah profil lengkap dari {params.memberName}</p>
        </div>
    )
}

export default Member;