import React from "react";
import Son from "./Son/Son";
class Father extends React.Component{
    constructor() {
        super();
    }

    render() {
        return (<div>
            <h5>角色：父亲</h5>
            <div>姓氏：{this.props.xingShi}</div>
            <div>名字：{this.props.mingZi}</div>
            <div>性别：{this.props.xingBie}</div>
            <h4>儿子：</h4>
            <Son xingBie={this.props.xingBie} xingShi={this.props.xingShi} mingZi={'鹏松'}/>
        </div>)
    }
}
export default Father;