import React, { Component } from "react";
import openImg from "../Images/screenshots/screenshot_myriad.png";

class Myriad extends Component {
  render() {
    return (
      <div className="col project">
        <div className="card shadow">
          <h5 className="card-header">Myriad</h5>
          <div className="card-body">
            <div className="row coverDiv">
              <div className="col description">
                <div className="descriptionText">
                  A symptom tracking application for collecting and exporting
                  health data for doctors visits
                </div>
              </div>
            </div>
            <div className="row imageCont">
              <div className="col">
                <img className="imgHov" alt="myriad" src={openImg} />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <img
                  className="logoDesc"
                  src="https://img.shields.io/badge/HTML5-informational?style=plastic&logo=html5&logoColor=33415c&color=979dac"
                  alt="HTML"
                />
                <img
                  className="logoDesc"
                  src="https://img.shields.io/badge/CSS3-informational?style=plastic&logo=css3&logoColor=33415c&color=979dac"
                  alt="css"
                />
                <img
                  className="logoDesc"
                  src="https://img.shields.io/badge/JavaScript-informational?style=plastic&logo=javascript&logoColor=33415c&color=979dac"
                  alt="javascript"
                />
                <img
                  className="logoDesc"
                  src="https://img.shields.io/badge/Bootstrap-informational?style=plastic&logo=bootstrap&logoColor=33415c&color=979dac"
                  alt="bootstrap"
                />
                <img
                  className="logoDesc"
                  src="https://img.shields.io/badge/jQuery-informational?style=plastic&logo=jquery&logoColor=33415c&color=979dac"
                  alt="jQuery"
                />
                <img
                  className="logoDesc"
                  src="https://img.shields.io/badge/mysql-informational?style=plastic&logo=mysql&logoColor=white&color=979dac"
                  alt="mysql"
                />
                <img
                  className="logoDesc"
                  src="https://img.shields.io/badge/Express-informational?style=plastic&logo=expressjs&logoColor=33415c&color=979dac"
                  alt="express"
                />
                <img
                  className="logoDesc"
                  src="https://img.shields.io/badge/NodeJS-informational?style=plastic&logo=nodejs&logoColor=33415c&color=979dac"
                  alt="nodeJS"
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/diuguide/symptom_tracker"
                >
                  <img
                    id="github"
                    src="https://img.shields.io/badge/REPO-Github-informational?style=flat&logo=github&logoColor=white"
                    alt="github"
                  />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://symptomtracker2.herokuapp.com/"
                >
                  <img
                    id="deployment"
                    src="https://img.shields.io/badge/DEPLOYMENT-informational?style=flat"
                    alt="github"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Myriad;
