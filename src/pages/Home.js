import React, { Component } from 'react'
import Banner from '../components/Banner/index';
import About from '../components/About/index';
import Links from '../components/Links/index';
import Skills from '../components/Skills/index';

export class Home extends Component {
    state = {
        nameFirst: "Everett",
        nameLast: "Diuguid",
        email: "everett.diuguid@gmail.com",
        position: "Full Stack Web Developer",
        linkedIn: "https://www.linkedin.com/in/everett-diuguid-583632197/",
        gitHub: "https://github.com/diuguide"
    }

    render() {
        return (
            <div className="container">
                <div className="row d-block d-md-flex">
                    <div className="col col-lg-8 m-1">
                        <Banner
                            nameFirst={this.state.nameFirst}
                            nameLast={this.state.nameLast}
                            position={this.state.position}
                        />
                        <About />
                    </div>
                    <div className="col col-lg-3">
                        <div className="row">
                            <Links />
                        </div>
                        <div className="row">
                            <Skills />
                        </div>
                    </div>
                </div>
                <div className="row">
                    

                </div>
            </div>
        )
    }
}

export default Home
