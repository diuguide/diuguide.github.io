import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="nav navbar-nav ml-auto justify-content-end">
                <li className="nav-item">
                        <Link className="nav-link" to="/portfolio_react">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="./Contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;