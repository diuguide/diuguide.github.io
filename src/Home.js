import { Container, Row, Col } from "react-bootstrap";
import Skills from './components/Skills';
import banner from "./components/Images/nameLogo.png";
import "./App.scss";

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
              md={6}
              lg={5}
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
            <Col xs={10} md={6} lg={5}>
              <Skills />
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-content-center">
            <Col xs={10} md={6} lg={5} >
              
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
