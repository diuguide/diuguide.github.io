import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Skills from "../Skills";
import face from "../Images/ediuguid.jpg";
import banner from "../Images/nameLogo.png";

const About = () => {
  return (
    <Row className="mt-4 d-inline-flex justify-content-center mx-auto">
      <Col lg="6" className="aboutContainer">
        <Row>
          <Col className="float-right">
            <img src={banner} className="banner" />
          </Col>
        </Row>
        <Row>
          <Col>
          <div className="description">
          <p>
            Hello! I am Full Stack Web developer with an eye for design and the ability to
            communicate, adapt, and learn on the fly. Experience working in a
            remote setting with group projects utilizing GitBash/GitHub version
            control, Zoom, Trello and GitHub kanban boards, and Slack. Hopeful
            to join a development team utilizing skills in ReactJS, Bootstrap 4,
            Linux systems, MongoDB, Express, and NodeJS.
          </p>
        </div>
          </Col>
        </Row>
      </Col>
      <Col>
        <Row>
          <Col>
            <img src={face} className="face" />
          </Col>
        </Row>
        <Row>
          <Col>
          <Skills></Skills>
          </Col>
        </Row>
        
      </Col>
    </Row>
  );
};

export default About;
