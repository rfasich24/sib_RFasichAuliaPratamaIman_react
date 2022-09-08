import React from "react";

//Membaca State di dalam Render

// export default class Users extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             username: "Fasich",
//         };
//     }
//     render() {
//         return (
//         <h1>{this.state.username}</h1>
//         );
//     }
// }

//Membaca State di dalam Function

// export default class Users extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             username: "Almas Firdaus",
//         };
//     }

//     getUsername() {
//         return this.state.username;
//     }

//     render() {
//         return (
//         <h1>{this.getUsername()}</h1>
//         );
//     }
// }


// Menulis State di dalam sebuah Function

export default class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "Fasich",
        };
    }

    setUsername = () => {
        this.setState({
            username: "Fasich2",
        });
    };

    render() {
        return (
            <div>
                <h1>{this.state.username}</h1>
                <br />
                <button onClick={this.setUsername}>Set Username</button>
            </div>
        );
    }
}
