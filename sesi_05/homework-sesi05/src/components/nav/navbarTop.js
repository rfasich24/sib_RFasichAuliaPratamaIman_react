import { Container, Nav, Navbar } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
import MyNavBrand from "../atomicDesign/MyNavBrand";
import MyNavLink from "../atomicDesign/MyNavLink";
import MyNavButton from "../atomicDesign/MyNavButton";

const NavbarTop = () => {
    return (
        <Navbar bg="secondary" expand="lg">
            <Container>
                <MyNavBrand brand="Qtemu" />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <MyNavLink nameLink="Home" actv="active" />
                        <MyNavLink nameLink="Create Meetup" actv="active" />
                        <MyNavLink nameLink="Explore" actv="active" />
                    </Nav>
                    <Nav className="d-flex">
                        <MyNavButton name="Login" />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarTop;
