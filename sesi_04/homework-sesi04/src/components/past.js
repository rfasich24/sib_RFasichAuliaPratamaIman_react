import { Row, Col, Button } from "react-bootstrap";

const Meet = (props) => {
    return (
        <Col md={3} className="rectangle p-3">
            <time>{props.tanggal}</time>
            <hr />
            <h5>
                #{props.hastag} {props.detail}
            </h5>
            <p>
                {props.number} <span>went</span>
            </p>
            <Button className="btn btn-primary">View</Button>
        </Col>
    );
};

function Past() {
    return (
        <div className="container mt-5">
            <Row className="justify-content-beetwen">
                <Col>
                    <h4 className="font-bold">Past Meetups</h4>
                </Col>
                <Col className="text-end">
                    <a href="">See All</a>
                </Col>
            </Row>

            <Row className="justify-content-evenly content p-4 g-4">
                <Meet
                    tanggal={"27 November 2017"}
                    hastag={"39"}
                    detail={"JakartaJS April Meetup with kumparan"}
                    number={"139"}
                />
                <Meet
                    tanggal={"27 October 2017"}
                    hastag={"38"}
                    detail={"JakartaJS April Meetup with BliBli"}
                    number={"113"}
                />
                <Meet
                    tanggal={"27 September 2017   "}
                    hastag={"37"}
                    detail={"JakartaJS April Meetup with Hacktiv8"}
                    number={"110"}
                />
            </Row>
        </div>
    );
}

export default Past;
