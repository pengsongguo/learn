import React from 'react';
import './App.scss';
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <ul>
                    <li><Link to="/home">首页</Link></li>
                    <li><Link to="/news" component={News}>新闻</Link></li>
                    <li><Link to="/about">关于</Link></li>
                </ul>
            </div>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/news" component={News}/>
                <Route path="/about" component={About}/>
            </Switch>
        </BrowserRouter>
    );
}

function Home() {
    return (<div>首页</div>)
}

function News() {
    return (<div>新闻</div>)
}

function About() {
    return (<div>关于</div>)
}

export default App;
