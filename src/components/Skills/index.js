import { stackData } from "../JSONdata/projectData";
import { Row, Col } from "react-bootstrap";

const Skills = () => {
  return (
    <Row>
      <Col className="d-flex justify-content-center flex-wrap">
        {Object.entries(stackData.stack).map(([key, tile], i) => {
          return <img id="tile" key={i} src={tile} alt="tile"></img>;
        })}
      </Col>
    </Row>
  );
};

export default Skills;
