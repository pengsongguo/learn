import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import './app.scss';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/user/' strict component={User}/>
                <Route path='/about' component={About}/>
                <Redirect from="/olduser" to="/user"/>
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