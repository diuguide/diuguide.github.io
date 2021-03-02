import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavHeader = () => {
  return (
    <Navbar expand="lg" bg="primary" variant="dark">
      <Navbar.Brand href="#About">Everett Diuguid</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#About">About</Nav.Link>
        <Nav.Link href="#projects">Work</Nav.Link>
        <Nav.Link href="#pricing">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavHeader;
