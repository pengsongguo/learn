import GrandFather from "../GrandFather/GrandFather";
import React from "react";

export default class FatherAndSon extends React.Component {
    constructor() {
        super();
        this.state={
            xingBie:'男性'
        }
    }

    changeIpt=(e)=>{
        this.setState( {
            xingBie:e.target.value
        })
    };

    render() {
        const {
            xingBie
        }=this.state;
        return (<div>
            <span>性别：</span>
            <input type="number" onChange={this.changeIpt} defaultValue={xingBie}/>
            <GrandFather xingBie={xingBie} xingShi={'郭'} mingZi={'乘法'}/>
        </div>)
    }
}
