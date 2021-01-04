import _ from 'lodash';
import printMe from './print';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    element.innerHTML = _.join(['hello', 'webpack'], ' ');
    btn.innerHTML = '点击我，查看控制台输出';
    btn.onclick = printMe;
    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());