import _ from 'lodash';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    element.innerHTML = _.join(['hello', 'webpack','hello','china'], ' ');
    btn.innerHTML = '点-击-查看控制台';
    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());