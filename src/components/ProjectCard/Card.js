import { Row, Col } from "react-bootstrap";

const Card = ({ title, description, img, stack, deploy, github }) => {
  return (
    <Row className="d-flex bg-light">
      <Col className="p-2" xs={12} md={5} lg={5}>
        <img id="project-img" src={img} alt="project image"></img>
      </Col>
      <Col xs={12} md={7} lg={7}>
        <Row>
          <Col>{title}</Col>
        </Row>
        <Row>
          <Col>{description}</Col>
        </Row>
        <Row>
          <Col>
            <a href={deploy} id="project-deploy" target="_blank">
              Deployment
            </a>
          </Col>
          <Col>
            <a href={github} id="project-github" target="_blank">
              Repo
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Card;
