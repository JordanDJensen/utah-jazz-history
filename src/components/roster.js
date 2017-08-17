import React from 'react';

class Roster extends React.Component {
    render() {
        return (
            <div>
                <img className="players" src={this.props.player.img}/>

                <div className="data">
                  <h4>{this.props.player.name}</h4>
                  <h4>{this.props.player.position} {this.props.player.number}</h4>
                </div>
              

            </div>
        );
    }
}

export default Roster;