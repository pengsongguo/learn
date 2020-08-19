import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

function App() {
    return (<div>
        <Router>
            <ul>
                <li>
                    <Link to='/'>首页</Link>
                </li>
                <li>
                    <Link to='/user'>用户</Link>
                </li>
                <li>
                    <Link to='/about'>关于</Link>
                </li>
            </ul>
            <hr/>
            <Switch>
                <Route scrit exact path='/'><Home/></Route>
                <Route path='/user'><User/></Route>
                <Route path='/about'><About/></Route>
            </Switch>
        </Router>
    </div>)
}

function Home() {
    return <div>Home</div>
}

function About() {
    return <div>About</div>
}

function User() {
    return <div>User</div>
}

export default App;