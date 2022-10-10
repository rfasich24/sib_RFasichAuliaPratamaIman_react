import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";


function Home() {
    return (
        <Card>
            <Card.Header>Testing Example</Card.Header>
            <Card.Body>
                <Card.Title>Why do we need Test?</Card.Title>
                <Card.Text>
                    To guarantee our code quality. and to show the people that we also care about it and wish to give something that already proven, at least by ourself
                </Card.Text>
                <Button as={Link} to="/users" variant="primary">
                    User List
                </Button>
            </Card.Body>
        </Card>
    );
}

export default Home;
