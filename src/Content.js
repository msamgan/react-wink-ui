import React from "react";
import {Route, Switch} from "react-router-dom"
import Home from "./pages/Home";
import Page from "./pages/Page";


const Content = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/page/:slug" component={Page}/>
        </Switch>
    )
}

export default Content;