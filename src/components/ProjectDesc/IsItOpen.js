import React, { Component } from 'react';
import openImg from '../Images/screenshots/screenshot_isitopen.png';

class IsItOpen extends Component {

    render() {
        return (

            <div className="col project">
                <div className="card shadow" style={{ width: "375px", height: "100%" }}>
                    <h5 className="card-header">Is it open?</h5>
                    <div className="card-body">
                        <div className="row coverDiv">
                            <div className="col description">
                                <h5>An API application that searches for open businesses and covid-19 statistics for a user-defined search location</h5>
                            </div>
                        </div>
                        <div className="row imageCont">
                            <div className="col">
                                <img className="imgHov" alt="isitopen" src={openImg} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img className="logo" src="https://img.shields.io/badge/HTML5-informational?style=flat&logo=html5&logoColor=white&color=b7b7a4" alt="HTML" />
                                <img className="logo" src="https://img.shields.io/badge/CSS3-informational?style=flat&logo=css3&logoColor=white&color=b7b7a4" alt="css" />
                                <img className="logo" src="https://img.shields.io/badge/JavaScript-informational?style=flat&logo=javascript&logoColor=white&color=b7b7a4" alt="javascript" />
                                <img className="logo" src="https://img.shields.io/badge/jQuery-informational?style=flat&logo=jquery&logoColor=white&color=b7b7a4" alt="jQuery" />
                                <img className="logo" src="https://img.shields.io/badge/Bootstrap-informational?style=flat&logo=bootstrap&logoColor=white&color=b7b7a4" alt="bootstrap" />
                            </div>

                        </div>
                        <div className="row mt-2"><div className="col">
                            <a rel="noopener noreferrer" target="_blank" href="https://github.com/diuguide/is_it_open">
                                <img id="github" src="https://img.shields.io/badge/REPO-Github-informational?style=flat&logo=github&logoColor=white" alt="github" />
                            </a>
                            <a rel="noopener noreferrer" target="_blank" href="https://diuguide.github.io/is_it_open/">
                                <img id="deployment" src="https://img.shields.io/badge/DEPLOYMENT-informational?style=flat" alt="github" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
        )
    }
}
export default IsItOpen;