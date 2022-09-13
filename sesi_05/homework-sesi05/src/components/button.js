import React from "react";
import { Button } from "react-bootstrap";

export default class ButtonTest extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Login",
        };
    }

    setName = () => {
        if (this.state.name === "Logout") {
            this.setState({
                name: "Login",
            });
        } else {
            this.setState({
                name: "Logout",
            });
        }
    };

    render() {
        return (
            <Button className="btn btn-warning" onClick={this.setName}>
                {this.state.name}
            </Button>
        );
    }
}
