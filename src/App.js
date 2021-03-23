import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavHeader from "./components/NavBar";
import About from "./components/About";
import ProjectsPage from "./components/ProjectsPage";
import "./App.css";

function App() {
  return (
    <>
      <Container fluid>
        <NavHeader />
        <div className="mainArea">
          <Row>
            <Col>
              <About />
            </Col>
          </Row>
        </div>
        <div className="projArea">
          <Row id="projects">
            <Col sm="auto" lg="9">
              <ProjectsPage />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default App;
