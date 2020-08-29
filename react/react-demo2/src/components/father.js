import React from 'react';
import Son from './son'

export default class Father extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    getName = (v) => {
        console.log(v);
        this.setState({
            name: v
        })
    };

    render() {
        return (<div>
            <h1>我是父组件，我叫{this.state.name}</h1>
            <Son getName={this.getName}/>
        </div>)
    }
}