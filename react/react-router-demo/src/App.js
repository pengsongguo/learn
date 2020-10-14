import React from 'react';
import './App.scss';
import {BrowserRouter, Link, NavLink, Switch, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <ul>
                    <li><NavLink to="/home">首页</NavLink></li>
                    <li><NavLink to="/news">新闻</NavLink></li>
                    <li><NavLink to="/about">关于</NavLink></li>
                    <li>
                        {/*<NavLink*/}
                        {/*    to="/events/123"*/}
                        {/*    isActive={(match, location) => {*/}
                        {/*        if (!match) {*/}
                        {/*            return false;*/}
                        {/*        }*/}
                        {/*        console.log(match);*/}
                        {/*        console.log(location);*/}
                        {/*        // only consider an event active if its event id is an odd number*/}
                        {/*        const eventID = parseInt(match.params.eventID);*/}
                        {/*        return !isNaN(eventID) && eventID % 2 === 1;*/}
                        {/*    }}*/}
                        {/*>*/}
                        {/*    Event 123*/}
                        {/*</NavLink>*/}
                    </li>
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
