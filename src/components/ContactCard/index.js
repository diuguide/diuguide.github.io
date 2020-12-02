import React from 'react';
import ediuguid from '../Images/ediuguid.jpg'


function ContactCard() {
    return (
        <div className="row">
            <div className="col bg-light p-1 shadow">
                <div className="row pl-2">
                    <div className="col p-3">
                        <div className="row m-1">
                            <div className="col">
                                <img id="github" src="https://img.shields.io/badge/Email-everett.diuguid@gmail.com-informational?style=flat&logo=gmail&logoColor=white" alt="github" />
                            </div>
                        </div>
                        <div className="row m-1">
                            <div className="col">
                                <a rel="noopener noreferrer" target="_blank" href="https://github.com/diuguide">
                                    <img id="github" src="https://img.shields.io/badge/Repositories-Github-informational?style=flat&logo=github&logoColor=white" alt="github" />
                                </a>
                            </div>
                        </div>
                        <div className="row m-1">
                            <div className="col">
                                <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/everett-diuguid-583632197/">
                                    <img id="linkedin" src="https://img.shields.io/badge/Profile-LinkedIn-informational?logo=linkedin" alt="LinkedIn" />
                                </a>
                            </div>
                        </div>
                        <div className="row m-1">
                            <div className="col"> 
                            </div>
                        </div>
                    </div>
                    <div className="col ml-3 m-md-3">
                        <img id="face" src={ediuguid} alt="everett diuguid" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard;     