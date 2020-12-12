import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';


const NavHeader = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Everett Diuguid</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">About</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavHeader;
