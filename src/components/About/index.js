import React from 'react';

function About(props) {
    return (
        <div className="row justify-content-center">
            <div className="col">
                <div className="row">
                    <div className="col m-1 shadow bg-light rounded">
                        <div className="pt-2 pl-2 aboutDescription">Full Stack Web developer with ability to communicate, adapt, and learn on the fly. Experience working in a remote setting with group projects utilizing GitBash/GitHub version control, Zoom, Trello and GitHub kanban boards, and Slack. Hopeful to join a development team utilizing skills in ReactJS, Bootstrap 4, Linux systems, MongoDB, Express, and NodeJS.</div>
                        <div className="p-2">Thank you for taking the time to visit my portfolio, here you will find links to all of my work in addition to links to my social media and professional accounts/repositories.  Please feel free to shoot me an email if you have any questions!</div>
                        <div className="float-right pr-4 pb-2">- Everett</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;