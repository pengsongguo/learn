import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import './app.scss';
import ErrorBoundary from "./ErrorBoundary";

function App() {
    return (
        <BrowserRouter>
                <Switch>
                    <ErrorBoundary><Route path='/' exact component={Home}/></ErrorBoundary>

                    <Route path='/user/' strict component={User}/>
                    <Route path='/about' component={About}/>
                    <Redirect from="/olduser" to="/user"/>
                </Switch>
        </BrowserRouter>
    )
}

function Home() {
    const obj={a:'中国',b:'jjj'}
    return <div>{obj.c}</div>
}

function User() {
    return <div>用户</div>
}

function About() {
    return <div>{'d'.a}</div>
}

export default App;