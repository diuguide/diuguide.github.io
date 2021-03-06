import { Container, Row, Col } from "react-bootstrap";
import Skills from "./components/Skills";
import Buttons from "./components/Buttons";
import Projects from "./components/ProjectsPage/Projects";
import banner from "./components/Images/nameLogo.png";
import Social from "./components/Social";
import "./scss/App.scss";

const Home = () => {
  return (
    <Container fluid>
      <Row
        style={{ height: "100vh" }}
        className="d-flex justify-content-center align-content-center"
      >
        <Col>
          <Row className="d-flex justify-content-center align-content-center">
            <Col
              xs={10}
              md={10}
              lg={7}
              className="d-flex justify-content-center"
            >
              <img
                id="nameBanner"
                src={banner}
                alt="everett diuguid web developer"
              ></img>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-content-center">
            <Col xs={10} md={10} lg={7}>
              <Skills />
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-content-center">
            <Col xs={10} md={6} lg={4}>
              <Buttons />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row
        id="projects"
        className="d-flex justify-content-center align-content-center"
      >
        <Col xs={10} md={10} lg={7}>
          <Projects />
        </Col>
      </Row>
      <Row
        id="contact"
        style={{ height: "100vh" }}
        className="d-flex justify-content-center"
      >
        <Col xs={10} md={10} lg={7}>
          <Social />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
