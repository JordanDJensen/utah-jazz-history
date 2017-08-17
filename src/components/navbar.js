import React from 'react';

import {Link} from "react-router-dom"

class Navbar extends React.Component {
    render() {
        return (
            <div className="navigation">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/history">History</Link>
                <Link to="/">
                  <img className="logo" src="http://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/jazz/JAZZ1617-Logo-J-Note-Partial.png"/>
                </Link>

                <Link className="link" to="/roster">Roster</Link>
                <Link className="link" to="/social">Social</Link>
            </div>
        );
    }
}

export default Navbar;