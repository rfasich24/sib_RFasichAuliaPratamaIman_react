import React, { useState } from "react";
import "./App.css";

function App() {
    function tick() {
        setDate(new Date());
    }
    const [date, setDate] = useState(new Date());
    
    
    setInterval(() => tick(), 1000);
    
    return (
        <div className="App">
            <h1>Realtime Clock Using Functional Component</h1>
            <hr />
            <h1>{date.toLocaleTimeString()}</h1>
        </div>
    );
}

export default App;
