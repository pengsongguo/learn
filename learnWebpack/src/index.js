import _ from 'lodash';
import printMe from "./print";

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    element.innerHTML = _.join(['hello', 'webpack'], '');
    btn.innerHTML = '点击此处在控制台输出信息';
    btn.onclick = printMe;
    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());

console.log(module.hot);
if(module.hot){
    module.hot.accept('./print.js',function (){
        console.log('热更新 热更新 点击此处 热更新！！！');
        printMe();
    })
}