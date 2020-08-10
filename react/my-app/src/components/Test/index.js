import React from "react";

class Test extends React.Component{
    constructor() {
        super();
        this.state={
            a:'A'
        }
    }
    render(){
        return(<div>{this.props.name}</div>)
    }
}

export default Test;