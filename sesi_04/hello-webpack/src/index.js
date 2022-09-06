import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    return (
        <div>
            <h2>Belajar ReactJs | First Application</h2>
        </div>
    )
}

const line_2 = () => {
    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("app"),
    // <line_2 />,
    // document.getElementById("line2")
)
