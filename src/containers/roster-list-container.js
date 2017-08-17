import React from 'react';
import RosterList from "../components/roster-list";
import {connect} from "react-redux";
import * as actionCreators from "../actions";


class RosterListContainer extends React.Component {
    componentWillMount(){
        this.props.loadData();
    }
    render() {
        return (
            <div>
                <RosterList players={this.props.players}/>
            </div>
        );
    }
}

const maptoStateProps = (state) =>{
    return state
}

export default connect (maptoStateProps,actionCreators) (RosterListContainer);