import Card from "react-bootstrap/Card";

const ProjectCard = ({ title, description, img, stack, deploy, github }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">{deploy}</Card.Link>
        <Card.Link href="#">{github}</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
