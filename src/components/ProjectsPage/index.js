import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCard from "../ProjectCard";
import projectData from "../JSONdata/projectData";

const ProjectsPage = () => {
  
  return (
    <Row className="mt-4 d-inline-flex justify-content-center mx-auto">
      {projectData.projects.map((project, index) => {
          console.log(project.img)
          return (
            <Col key={index}>
              <ProjectCard
                title={project.title}
                description={project.description}
                img={project.img}
                stack={project.stack}
                deploy={project.links.deploy}
                github={project.links.github}
              />
            </Col>
          );
        })} 
    </Row>
  );
};

export default ProjectsPage;

 

