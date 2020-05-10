import _ from 'lodash';
import printMe from "./print";

function component() {
    // 创建一个div
    var element = document.createElement('div');
    //创建一个按钮
    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    element.innerHTML = _.join(['Hello', 'world'], ' ');

    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());