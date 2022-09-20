import React from "react";
import InlineCss from "./InlineCss";
import External from "./External"
import ExternalCssModule from "./ExternalCssModule";
import StyledComponents from "./StyledComponents";
import ObjectVariable from "./ObjectVariable";
import ExternalObjectVariable from "./ExternalObjectVariable";

const Main =  () => {
    return(
        <div>
            <h1>Coba</h1>
            <InlineCss/>
            <ObjectVariable/>
            <External/>
            <ExternalCssModule/>
            <ExternalObjectVariable/>
            <StyledComponents/>
        </div>
    )
}

export default Main;