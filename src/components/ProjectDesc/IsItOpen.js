import React, { Component } from "react";
import openImg from "../Images/screenshots/screen_isitopenNEW.png";

class IsItOpen extends Component {
  render() {
    return (
      <div className="col project">
        <div style={{ width: "345px" }} className="card shadow">
          <h5 className="card-header">Is it open?</h5>
          <div className="card-body">
            <div className="row coverDiv">
              <div className="col description">
                <div className="descriptionText">
                  An API application that searches for open businesses and
                  covid-19 statistics for a user-defined search location
                </div>
              </div>
            </div>
            <div className="row imageCont">
              <div className="col">
                <img className="imgHov" alt="isitopen" src={openImg} />
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
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/diuguide/is_it_open"
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
                  href="https://diuguide.github.io/is_it_open/"
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
export default IsItOpen;
