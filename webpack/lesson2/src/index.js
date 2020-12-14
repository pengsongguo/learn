import print from "./print";
import _ from 'lodash';

function component() {
    const divDom = document.createElement('div');
    const btnDom = document.createElement('button');
    divDom.innerHTML = _.join(['hello', 'webpack'], ' ');
    btnDom.innerHTML = '按钮';
    btnDom.onclick = print;
    let rootDom = document.getElementById('root');
    rootDom.appendChild(divDom);
    rootDom.appendChild(btnDom);
}

component();