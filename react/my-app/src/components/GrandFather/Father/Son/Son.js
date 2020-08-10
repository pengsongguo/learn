import React from "react";

class Son extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <h5>角色：孙子</h5>
            <div>姓氏：{this.props.xingShi}</div>
            <div>名字：{this.props.mingZi}</div>
            <div>性别：{this.props.xingBie}</div>
            <h4>儿子：</h4>
            <div>无</div>
        </div>)
    }

};
export default Son;