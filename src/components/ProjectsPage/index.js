import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCard from "../ProjectCard";
import projectData from "../JSONdata/projectData";
import screen_isitopen from "../Images/screenshots/screen_isitopenNEW.png";
import screen_myriad from "../Images/screenshots/screenshot_myriad.png";
import screen_rainorshine from "../Images/screenshots/screenshot_weathermap.png";
import screen_yardPal from "../Images/screenshots/screenshot_yardpal.png";

const ProjectsPage = () => {
  return (
    <Row className="mt-4 d-inline-flex justify-content-center mx-auto">
      <Col>
        <ProjectCard
          title={projectData.isitopen.title}
          description={projectData.isitopen.description}
          img={screen_isitopen}
          stack={projectData.isitopen.stack}
          deploy={projectData.isitopen.links.deploy}
          github={projectData.isitopen.links.github}
        />
      </Col>
      <Col>
        <ProjectCard
          title={projectData.rainorshine919.title}
          description={projectData.rainorshine919.description}
          img={screen_rainorshine}
          stack={projectData.rainorshine919.stack}
          deploy={projectData.rainorshine919.links.deploy}
          github={projectData.rainorshine919.links.github}
        />
      </Col>
      <Col>
        <ProjectCard
          title={projectData.yardPal.title}
          description={projectData.yardPal.description}
          img={screen_yardPal}
          stack={projectData.yardPal.stack}
          deploy={projectData.yardPal.links.deploy}
          github={projectData.yardPal.links.github}
        />
      </Col>
      <Col>
        <ProjectCard
          title={projectData.myriad.title}
          description={projectData.myriad.description}
          img={screen_myriad}
          stack={projectData.myriad.stack}
          deploy={projectData.myriad.links.deploy}
          github={projectData.myriad.links.github}
        />
      </Col>
    </Row>
  );
};

export default ProjectsPage;
