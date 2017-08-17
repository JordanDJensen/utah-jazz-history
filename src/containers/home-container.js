import React from 'react';
import Home from "../components/home";

class HomeContainer extends React.Component {
    constructor(){
        super()
    }
    
    render() {
        return (
            <div>
                <Home/>
            </div>
        );
    }
}

export default HomeContainer;