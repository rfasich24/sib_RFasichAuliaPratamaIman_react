import { Button, Row, Col } from "react-bootstrap";
import logo from "../AppIcon.jpg";

function HeaderMeet() {
    return (
        <div className="rectangle p-2 mt-3">
            <Row>
                <Col md={3}>
                    <img src={logo} alt={logo} width={280} />
                </Col>
                <Col md={8}>
                    <h3 className="font-bold">Hacktiv8 Meetup</h3>
                    <Row>
                        <Col sm={4} md={3}>
                            <p>Location</p>
                        </Col>
                        <Col sm={8} md={8}>
                            <p>: Jakarta, Indonesia</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} md={3}>
                            <p>Members</p>
                        </Col>
                        <Col sm={8} md={8}>
                            <p>: 1,078</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} md={3}>
                            <p>Organizers</p>
                        </Col>
                        <Col sm={8} md={8}>
                            <p>: Adhy Wiranata</p>
                        </Col>
                    </Row>
                    <Button className="btn btn-primary">Join Us</Button>
                </Col>
            </Row>
        </div>
    );
}

export default HeaderMeet;
