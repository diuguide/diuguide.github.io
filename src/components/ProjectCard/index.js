import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ProjectCard = ({ title, description, img, stack, deploy, github }) => {
  return (
    <Card className="m-2 shadow border-rounded" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body classNmae="border-rounded">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Body classNmae="border-rounded">
        <Button href={deploy}>Deployment</Button>
        <Button href={github}>Repo</Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
