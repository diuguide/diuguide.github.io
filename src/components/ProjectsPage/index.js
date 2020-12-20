import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import IsItOpen from "../ProjectDesc/IsItOpen.js";
import WeatherMap from "../ProjectDesc/WeatherMap.js";
import Myriad from "../ProjectDesc/Myriad.js";
import YardPal from "../ProjectDesc/YardPal.js";

const ProjectsPage = () => {
  return (
    <Row className="mt-4">
      <Col id="projectsContainer"  md={9} className="mx-auto">
        <Row>
          <Col>
            <WeatherMap />
          </Col>
          <Col>
            <YardPal />
          </Col>
          <Col>
            <Myriad />
          </Col>
          <Col>
            <IsItOpen />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ProjectsPage;
