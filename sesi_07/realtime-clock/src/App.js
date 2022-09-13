//Using Class Component

// import React from 'react';
// import './App.css';

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state = {
//       date: new Date()
//     }
//   }

//   tick(){
//     this.setState({
//       date: new Date()
//     })
//   }

//   componentDidMount(){
//     this.timerID = setInterval(() => this.tick(), 1000)
//   }

//   componentWillUnmount(){
//     clearInterval(this.timerID)
//   }

//   render(){
//     return(
//       <div className='App'>
//         <h1>Realtime Clock Using Class Component</h1>
//         <hr />
//         <h1>{this.state.date.toLocaleTimeString()}</h1>
//       </div>
//     );
//   }
// }

// export default App;


//Using Functional Component

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
            <h2>Today is {date.toLocaleDateString()}</h2>
            <h1>{date.toLocaleTimeString()}</h1>
        </div>
    );
}

export default App;