import { Container, Row, Col } from "react-bootstrap";
import banner from "./components/Images/tnc.jpg";
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
                alt="none"
              ></img>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
