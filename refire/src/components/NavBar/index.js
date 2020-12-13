import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';


const NavHeader = () => {
  return (
    <Navbar bg="black" variant="black">
      <Nav className="mx-auto">
        <Nav.Link className="navItem" href="#home">ABOUT</Nav.Link>
        <Nav.Link className="navItem" href="#projects">PROJECTS</Nav.Link>
        <Nav.Link className="navItem" href="#contact">CONTACT</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavHeader;
