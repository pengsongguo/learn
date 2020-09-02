import React from "react";
import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom";
import './app.scss';

function App() {
    return (
        <BrowserRouter basename="/test">
            <Switch>
                <Route path='/user' component={User}/>
                <Route path='/about' component={About}/>
                <Route path='/' component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}

function Home() {
    return <div>首页</div>
}

function User() {
    return <div>用户</div>
}

function About() {
    return <div>关于</div>
}

export default App;