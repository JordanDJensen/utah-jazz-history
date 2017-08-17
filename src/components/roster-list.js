import React from 'react';
import RosterContainer from "../containers/roster-container";

class RosterList extends React.Component {
    genPlayers(){
        return this.props.players.map((item, index) =>{
            return  <RosterContainer key={item.name + index} player={item}/>
        })
    }
    render() {
        return (
            <div>
                
                <h1>Jazz 2017-18 Roster</h1>
                <div className="col-lg-offset-2 col-lg-8">
                    {this.genPlayers()}
                </div>
                <div className="staff">
                <h1>Coaching Staff</h1>
                </div>
            </div>
        );
    }
}

export default RosterList;