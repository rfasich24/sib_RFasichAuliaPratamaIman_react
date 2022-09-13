import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavBrand = (props) => {
  return (
    <>
      <Navbar.Brand as={Link} to="/">
        {props.brand}
      </Navbar.Brand>
    </>
  );
};

export default MyNavBrand;
