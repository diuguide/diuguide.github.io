import React from 'react';
import { Link } from 'react-router-dom';

function Links() {
    return (
        <div className="col bg-light rounded m-1 p-2 d-block shadow">
            <div className="row">
                <div className="col">
                    <p>Please check out some of my latest projects or navigate to the contact page and leave me
                    a message!</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Link style={{backgroundColor: "#9b9b7a"}} role="button" className="btn btn-info w-100 mb-3" to="/Projects">Projects</Link>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Link style={{backgroundColor: "#9b9b7a"}} role="button" className="btn btn-info w-100" to="/Contact">Contact Me!</Link>
                </div>
            </div>
        </div>
    )
}

export default Links;