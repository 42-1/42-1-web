import React from "react";
import { Empty, Button } from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './../pages/home'

export default function Layout() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Home />
                </Route>


                <Route path="*">
                    <NoMatch />
                </Route>
            </Switch>
        </Router>
    );
}


function NoMatch() {
    return (
        <Empty
            image="https://freefrontend.com/assets/img/html-funny-404-pages/HTML-404-Page.gif"
            description={
                <span>
                    Link not found
                </span>
            }
        >
            <Button type="primary" onClick={() => window.location.href = "/"}>Go To Home</Button>
        </Empty>
    );
}