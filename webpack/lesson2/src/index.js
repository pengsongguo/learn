import print from "./print";
import _ from 'lodash';
import JiaFa from "./jiaFa";
import JianFa from './jiaFa'

function component() {
    const divDom = document.createElement('div');
    const btnDom = document.createElement('button');
    divDom.innerHTML = _.join(['hello', 'webpack'], ' ');
    btnDom.innerHTML = '按9钮';
    btnDom.onclick = print;

    JiaFa(34, 2);

    let rootDom = document.getElementById('root');
    rootDom.appendChild(divDom);
    rootDom.appendChild(btnDom);
}

component();

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('我来自于print函数123');
        print();
    })
}