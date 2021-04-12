import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Skills from "../Skills";
import face from "../Images/ediuguid.jpg";
import banner from "../Images/nameLogo.png";
import Social from "../Social";

const About = () => {
  return (
    <Row className="mt-4 justify-content-center mx-auto">
      <Col className="aboutContainer">
        <Row>
          <Col>
            <img src={banner} className="banner" alt="banner" />
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Hello! I am Full Stack Web developer with an eye for design and
              the ability to communicate, adapt, and learn on the fly.
              Experience working in a remote setting with group projects
              utilizing GitBash/GitHub version control, Zoom, Trello and GitHub
              kanban boards, and Slack. Hopeful to join a development team
              utilizing skills in ReactJS, Bootstrap 4, Linux systems, MongoDB,
              Express, and NodeJS.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="skillContainer">
            <Skills></Skills>
          </Col>
        </Row>
      </Col>
      <Col>
        <Row>
          <Col className="xs-mx-auto">
            <img src={face} className="face" alt="myface" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Social />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default About;
