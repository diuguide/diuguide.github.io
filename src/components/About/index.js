import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <Row>
      <Col xs={12} md={9} lg={6} className="aboutContainer">
        <div className="pt-2 pl-2 aboutDescription">
          Hello there! Feel free to connect with my on linkedIn or shoot me an email at everett.diuguid@gmail.com!  Hope to hear from you soon.
        </div>
        <div className="float-right pr-4 pb-2 aboutDescription">- Everett</div>
      </Col>
    </Row>
  );
};

export default About;
