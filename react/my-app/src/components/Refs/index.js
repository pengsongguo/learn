import React from "react";

export default class Refs extends React.Component {
    constructor() {
        super();
        this.iptRef=React.createRef();
    }
    componentDidMount() {
        console.log(this.iptRef.current.value);
    }

    render() {
        return (<div>
            <input type="text" placeholder="测试refs" ref={this.iptRef} defaultValue="ghjk"/>
        </div>)
    }
}