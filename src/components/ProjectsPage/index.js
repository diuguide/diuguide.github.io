import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCard from "../ProjectCard"
import projectData from "../JSONdata/projectData";

const ProjectsPage = () => {
  return (
    <Row className="mt-4">
      <Col id="projectsContainer" md={9} className="mx-auto">
        <Row>
          <Col>
            <ProjectCard
              title={projectData.isitopen.title}
              description={projectData.isitopen.description}
              img={projectData.isitopen.img}
              stack={projectData.isitopen.stack}
              deploy={projectData.isitopen.links.deploy}
              github={projectData.isitopen.links.github}
            />
          </Col>
          <Col>
            <ProjectCard
              title={projectData.rainorshine919.title}
              description={projectData.rainorshine919.description}
              img={projectData.rainorshine919.img}
              stack={projectData.rainorshine919.stack}
              deploy={projectData.rainorshine919.links.deploy}
              github={projectData.rainorshine919.links.github}
            />
          </Col>
          <Col>
            <ProjectCard
              title={projectData.yardPal.title}
              description={projectData.yardPal.description}
              img={projectData.yardPal.img}
              stack={projectData.yardPal.stack}
              deploy={projectData.yardPal.links.deploy}
              github={projectData.yardPal.links.github}
            />
          </Col>
          <Col>
            <ProjectCard
              title={projectData.myriad.title}
              description={projectData.myriad.description}
              img={projectData.myriad.img}
              stack={projectData.myriad.stack}
              deploy={projectData.myriad.links.deploy}
              github={projectData.myriad.links.github}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ProjectsPage;
