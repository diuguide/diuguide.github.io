import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import NavHeader from "./components/NavBar";
import Landing from './components/Landing';
import Skills from './components/Skills';
import downArrow from './downarrow.png';
import "./App.css";

function App() {
  return (
    <>
    <Container>
      <Row className="firstSecion" style={{ backgroundImage:"./stars.jpg " }}>
        <Col>
        <Landing />
      <NavHeader />
      <Skills />
        </Col>
      </Row>
      <Row>
        <Col className="downButton">
        <a href="#projects"><img src={downArrow}></img></a>
        </Col>
      </Row>
      <Row id="projects" className="secondSection">
        <Col>
        <h1>test</h1>
        </Col>
      </Row>

    </Container>
    </>
  );
}

export default App;
