import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavHeader from "./components/NavBar";
import Skills from "./components/Skills";
import About from "./components/About";
import downArrow from "./downarrow.png";
import ProjectsPage from "./components/ProjectsPage";
import "./App.css";

function App() {
  return (
    <>
      <Container fluid>
        <Row className="firstSecion">
          <Col>
            <Row>
              <Col className="pl-4">
                <NavHeader />
                <About />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row id="projects" className="secondSection">
          <Col>
            <ProjectsPage />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
