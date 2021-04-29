import React from "react";
import { Empty, Button } from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from '../pages/home'
import StartechProductDetails from './../components/productList/startech/startechProductDetails'


export default function Layout() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/startech/:id">
                    <StartechProductDetails />
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