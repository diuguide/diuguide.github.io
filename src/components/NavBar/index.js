import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavHeader = () => {
  return (
    <Navbar bg="black" variant="black">
      <Nav className="mx-auto">
        <Nav.Link id="projectsLink" className="navItem" href="#projects">
          Projects
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavHeader;
