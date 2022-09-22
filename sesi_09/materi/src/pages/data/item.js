import { useParams } from "react-router-dom";
import { getItems } from "./ItemData";

function Item() {
    let params = useParams()
    let items = getItems()
    let item = items.find(
        item => item.id === Number(params.itemId)
    )

    return(
        <div>
            <br/>
            <hr/>
            <h3>
                {item.name}
            </h3>
            <p>
                Age : {item.age}<br/>
                Hobby : {item.hobby}
            </p>
        </div>
    )
}

export default Item;