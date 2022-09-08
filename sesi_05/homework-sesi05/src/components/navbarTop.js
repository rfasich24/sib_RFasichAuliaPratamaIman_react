import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarTop() {
    return (
        <Navbar bg="primary" expand="lg">
            <Container>
                <Navbar.Brand href="">Qtemu</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Create Meetup</Nav.Link>
                        <Nav.Link href="#">Explore</Nav.Link>
                    </Nav>
                    <Nav className="d-flex">
                        <Nav.Link href="#">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarTop;
