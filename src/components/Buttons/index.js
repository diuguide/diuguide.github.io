import { Row, Col } from 'react-bootstrap';

const Buttons = () => {
    return (
      <Row className="mt-4">
        <Col className="d-flex justify-content-end align-content-center">
          <a id="btn-projects" href="#projects">
            Projects
          </a>
        </Col>
        <Col className="d-flex justify-content-start align-content-center">
          <a id="btn-contact" href="#contact">
            Contact
          </a>
        </Col>
      </Row>
    );
}

export default Buttons;