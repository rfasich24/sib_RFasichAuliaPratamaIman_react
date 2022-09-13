import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Blog = () => {
  let slug = useLocation().pathname;
  slug = slug.slice(1);
  return (
    <Container className="card-box mt-4 p-4">
      <h3>ini halaman {slug}</h3>
    </Container>
  );
};

export default Blog;
