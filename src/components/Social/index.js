import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import linkedIn from "../Images/linkedin.png";
import github from "../Images/githubsmall.png";
import instagram from "../Images/instagram.png";
const Social = () => {
  return (
    <Row className="m-2 mt-4 social" style={{ width: "200px" }}>
      <Col>
        <img src={linkedIn} />
      </Col>
      <Col>
        <img src={github} />
      </Col>
      <Col>
        <img style={{ width: "44px" }} src={instagram} />
      </Col>
    </Row>
  );
};
export default Social;
