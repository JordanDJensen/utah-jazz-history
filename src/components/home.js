import React from 'react';
import {Link} from 'react-router-dom';
import {Player} from "video-react";

class Home extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row home">
                    <div className="col-lg-offset-4 col-lg-4">
                      <h1 className="quote">Heart is what makes a Difference</h1>
                    <h4 className="author">- Coach Jerry Sloan</h4>
                    <div className="resume">
                    <Link to="/history">
                        <button className="btn journey">The Journey</button>
                    </Link>
                        
                    </div>
                    
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;