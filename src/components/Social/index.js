import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import linkedIn from "../Images/linkedin.png";
import github from "../Images/githubsmall.png";
import instagram from "../Images/instagram.png";
const Social = () => {
  return (
    <Row className="m-2 mt-4 social" style={{ width: "200px" }}>
      <Col>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/everett-diuguid-583632197/"
        >
          <img src={linkedIn} alt="instagram" />
        </a>
      </Col>
      <Col>
        <a target="_blank" rel="noreferrer" href="https://github.com/diuguide">
          <img src={github} alt="github" />
        </a>
      </Col>
      <Col>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/diuguid/"
        >
          <img style={{ width: "44px" }} src={instagram} alt="instagram" />
        </a>
      </Col>
    </Row>
  );
};
export default Social;
