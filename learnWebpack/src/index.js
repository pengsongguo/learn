import {cube} from "./math";

function component() {
    var ele = document.createElement('pre');
    ele.innerHTML = ['hello webpack', '5 的三次方是', cube(5)].join('\n\n');
    return ele;
}

document.body.appendChild(component());