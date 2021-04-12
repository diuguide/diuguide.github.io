import { stackData } from "../JSONdata/projectData";
import { Row, Col } from "react-bootstrap";

const Skills = () => {
  return (
    <Row>
      <Col>
        {Object.entries(stackData.stack).map(([key, tile], i) => {
          return <img key={i} src={tile} alt="tile"></img>;
        })}
      </Col>
    </Row>
  );
};

export default Skills;
