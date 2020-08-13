import React from "react";
import Father from './Father/Father';
import PropTypes from 'prop-types'
import shuXing from "./shuXing";


export default class GrandFather extends React.Component {
    constructor() {
        super();
    }

    render() {
        console.log(this.context);
        return (<div>
            <h5>角色：爷爷</h5>
            <div>姓氏：{this.props.xingShi}</div>
            <div>名字：{this.props.mingZi}</div>
            <div>性别：{this.props.xingBie}</div>
            <h4>儿子：</h4>
            <Father xingBie={this.props.xingBie} xingShi={this.props.xingShi} mingZi={'白蛋'}/>
        </div>)
    }
}

GrandFather.propTypes = {
    xingBie: PropTypes.number
};