import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import CodeQuiz from '../components/ProjectDesc/CodeQuiz.js';
import IsItOpen from '../components/ProjectDesc/IsItOpen.js'
import PasswordGenerator from '../components/ProjectDesc/PasswordGenerator.js';
import WeatherMap from '../components/ProjectDesc/WeatherMap.js';
import Myriad from '../components/ProjectDesc/Myriad.js';
import Burger from '../components/ProjectDesc/Burger.js';
import BlankSpace from '../components/BlankSpace/index.js';
import YardPal from '../components/ProjectDesc/YardPal.js';

export class Projects extends Component {
    state = {
        nameFirst: "Everett",
        nameLast: "Diuguid",
        phone: "(919) 801-8756",
        email: "everett.diuguid@gmail.com",
        position: "Full Stack Developer",
        linkedIn: "https://www.linkedin.com/in/everett-diuguid-583632197/",
        gitHub: "https://github.com/diuguide"
    }
    
    render() {
        return (
            <Container>
                <Row className="d-block">
                    <Col>
                    <WeatherMap />
                    </Col>
                    <Col>
                    <YardPal />
                    </Col>
                    <Col>
                    <IsItOpen />
                    </Col>
                    <Col>
                    <Myriad />
                    </Col> 
                </Row>
                <BlankSpace />
            </Container>
        )
    }
}

export default Projects