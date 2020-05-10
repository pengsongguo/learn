import _ from 'lodash';
import './style.css';
import pic from './longmao.jpg'

function component() {
    // 创建一个div
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'world'], ' ');
    element.classList.add('hello');
    // 创建一个img
    var img = new Image();
    img.src = pic;
    element.appendChild(img);
    return element;
}

document.body.appendChild(component());