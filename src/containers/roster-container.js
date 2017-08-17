import React from 'react';
import Roster from "../components/roster";

class RosterContainer extends React.Component {
    render() {
        return (
            <div className="col-lg-3">
                <Roster player={this.props.player}/>
            </div>
        );
    }
}

export default RosterContainer;