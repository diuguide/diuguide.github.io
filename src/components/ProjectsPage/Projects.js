import { Row, Col } from "react-bootstrap";
import Card from "../ProjectCard/Card";
import { projectData } from "../JSONdata/projectData";

const Projects = () => {
  return (
    <Row>
      <Col className="d-block">
        {projectData.projects.map((project, index) => {
          return (
            <Row key={index} className="mt-4">
              <Col >
                <Card
                  
                  title={project.title}
                  description={project.description}
                  img={project.img}
                  stack={project.stack}
                  deploy={project.links.deploy}
                  github={project.links.github}
                />
              </Col>
            </Row>
          );
        })}
      </Col>
    </Row>
  );
};
export default Projects;
