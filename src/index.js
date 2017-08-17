import React from 'react';
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducers from "./reducers/";
import thunk from "redux-thunk";

//Components
import HomeContainer from "./containers/home-container";
import HistoryContainer from "./containers/history-container";
import RosterListContainer from "./containers/roster-list-container";
import SocialContainer from "./containers/social-container";
import Navbar from "./components/navbar";


import "./css/style.css"

const store = createStore(reducers, applyMiddleware(thunk))


class App extends React.Component {
    render() {
        return (
            <div>
            <BrowserRouter>
                <div>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={HomeContainer}/>
                    <Route exact path="/history" component={HistoryContainer}/>
                    <Route exact path="/roster" component={RosterListContainer}/>
                    <Route exact path="/social" component={SocialContainer}/>
                </Switch>
                </div>
            </BrowserRouter>
            </div>
          
        );
    }
}

ReactDOM.render(<Provider store= {store}><App/></Provider>,document.querySelector("#root"))
