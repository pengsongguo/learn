// 生命周期的用法

import React from 'react';

export default class Mount extends React.Component {
    constructor() {
        super();
        console.log(1);
    }

    static getDerivedStateFromProps(){
        console.log(5);
    }

    UNSAFE_componentWillMount() {
        console.log(2);
    }

    componentDidMount() {
        console.log(3);
    }

    render() {
        console.log(4);
        return (<div>
            '生命周期'
        </div>)
    }
}