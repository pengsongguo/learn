/*
 *
 * 作者：郭鹏松
 * 项目介绍：保险载入中动画、效果见预览图
 * 日期:2019/1/31
 *
 */



import React, {Component} from 'react';
import './index.scss'



export default class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (<div id="LoadingForInsurance">
            <div className="panel-container">
                <i className="zhen"/>
                <p className="describe">"加载中..."</p>
            </div>

        </div>)
    }
}