import React from 'react';

function Banner(props) {
    return (
        <div className="row">
            <div className="col m-1 rounded shadow" style={{ backgroundColor: "#9b9b7a" }} >
                <div className="row">
                    <div className="col" style={{ color: "#f1dca7" }}>
                        <h3>{props.nameFirst} {props.nameLast}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h5>{props.position}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;