import _ from 'loadsh';

function component() {
    let button = document.createElement('button');
    button.innerText = '生成';
    document.getElementById('root').appendChild(button);
    let div = document.createElement('div');

    button.addEventListener('click', () => {
        import(/* webpackChunkName:"text" */ './text').then(module => {
            div.innerText = _.join(module.default(), '~');
        })
    });
    return div;
}

document.getElementById('root').appendChild(component());