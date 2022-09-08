import { Row, Col } from "react-bootstrap";
import logo from "../AppIcon.jpg";

function Members() {
    return (
        <div className="container mt-5">
            <Row className="justify-content-beetwen">
                <Col>
                    <h4 className="font-bold">Members</h4>
                </Col>
                <Col className="text-end">
                    <a href="">See All</a>
                </Col>
            </Row>
            <div className="rectangle p-3">
                <Row>
                    <Col md={1}></Col>
                    <Col md={1}>
                        <img
                            src={logo}
                            className="rounded-circle"
                            alt={logo}
                            width="70"
                        />
                    </Col>
                    <Col md={10}>
                        <p>
                            <strong>Organizers</strong>
                        </p>
                        <p>Adhy Wiranata &nbsp; 4 other</p>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Members;
