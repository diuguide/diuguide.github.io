import { Row, Col } from "react-bootstrap";

const Card = ({ title, description, img, stack, deploy, github }) => {
  return (
    <Row className="d-flex">
      <Col className="p-2" xs={12} md={4} lg={4}>
        <img id="project-img" src={img} alt="project image"></img>
      </Col>
      <Col
        className="d-flex flex-column align-self-center"
        xs={12}
        md={7}
        lg={7}
      >
        <Row>
          <Col>
            <h3>{title}</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{description}</p>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex">
            <a href={deploy} id="project-deploy" target="_blank">
                          Deployment
            </a>
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
