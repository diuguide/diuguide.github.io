import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Skills = () => {
  return (
    <Row className="mt-4">
      <Col>
        <Row>
          <Col className="ml-2">
            <h3>Skill Stack</h3>
          </Col>
        </Row>
        <Row>
          <Col className="d-inline-flex">
            <img
              className="logo"
              src="https://img.shields.io/badge/HTML5-informational?style=plastic&logo=html5&logoColor=33415c&color=979dac"
              alt="HTML"
            />
            <img
              className="logo"
              src="https://img.shields.io/badge/CSS3-informational?style=plastic&logo=css3&logoColor=33415c&color=979dac"
              alt="css"
            />
            <img
              className="logo"
              src="https://img.shields.io/badge/JavaScript-informational?style=plastic&logo=javascript&logoColor=33415c&color=979dac"
              alt="javascript"
            />
            <img
              className="logo"
              src="https://img.shields.io/badge/Bootstrap-informational?style=plastic&logo=bootstrap&logoColor=33415c&color=979dac"
              alt="bootstrap"
            />
            <img
              className="logo"
              src="https://img.shields.io/badge/jQuery-informational?style=plastic&logo=jquery&logoColor=33415c&color=979dac"
              alt="jQuery"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              className="logo"
              src="https://img.shields.io/badge/MongoDB-informational?style=plastic&logo=mongodb&logoColor=33415c&color=979dac"
              alt="mongodb"
            />
             <img
              className="logo"
              src="https://img.shields.io/badge/Express-informational?style=plastic&logo=expressjs&logoColor=33415c&color=979dac"
              alt="express"
            />
            <img
              className="logo"
              src="https://img.shields.io/badge/React-informational?style=plastic&logo=react&logoColor=33415c&color=979dac"
              alt="react"
            />
             <img
              className="logo"
              src="https://img.shields.io/badge/NodeJS-informational?style=plastic&logo=nodejs&logoColor=33415c&color=979dac"
              alt="nodeJS"
            />
          </Col>
        </Row>
        <Row>
          <Col className="ml-2 mt-2">
            <h3>Dev Tools</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              className="logo"
              src="https://img.shields.io/badge/Github-informational?style=plastic&logo=github&logoColor=33415c&color=979dac"
              alt="github"
            />
            <img
              className="logo"
              src="https://img.shields.io/badge/Postman-informational?style=plastic&logo=postman&logoColor=33415c&color=979dac"
              alt="postman"
            />
            <img
              className="logo"
              src="https://img.shields.io/badge/Heroku-informational?style=plastic&logo=heroku&logoColor=33415c&color=979dac"
              alt="heroku"
            />
            <img
              className="logo"
              src="https://img.shields.io/badge/VScode-informational?style=plastic&logo=vscode&logoColor=33415c&color=979dac"
              alt="vscode"
            />
            <img
              className="logo"
              src="https://img.shields.io/badge/GitBash-informational?style=plastic&logo=bash&logoColor=33415c&color=979dac"
              alt="heroku"
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Skills;