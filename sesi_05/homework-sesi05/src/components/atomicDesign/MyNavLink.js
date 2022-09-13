import { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

const MyNavLink = (props) => {
  const [linkClick, setLinkClick] = useState("");

  let nameLink = props.nameLink;
  let slug = `/${nameLink.replace(" ", "-").toLowerCase()}`;
  let locSlug = useLocation().pathname;

  useEffect(() => {
    setLinkClick(locSlug === slug ? "active" : "");
  }, [locSlug, slug]);

  return (
    <>
      <Nav.Link as={NavLink} to={slug} className={linkClick}>
        {props.nameLink}
      </Nav.Link>
    </>
  );
};

export default MyNavLink;
