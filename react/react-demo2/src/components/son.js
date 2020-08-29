import React from "react";

export default class Son extends React.Component {
    constructor(props) {
        super(props);
    }

    getFather = () => {
        this.props.getName('大王')
    };

    render() {
        return (<div>
            <h1>我是儿子组件，我叫小王</h1>
            <button onClick={this.getFather}>这是我的父亲</button>
        </div>)
    }
}