import React from "react";
import {BrowserRouter, Route, Switch, NavLink, Redirect} from "react-router-dom";
import './app.scss';


function App() {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
            </div>
        </BrowserRouter>)
}

function Home() {
    return <div>首页</div>
}

function User() {
    return <div>欢迎您 albert</div>
}

function About() {
    return <div>关于</div>
}

export default App;