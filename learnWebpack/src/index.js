function getComponent() {
    const element = document.createElement('div');
    return import('lodash').then(({default: _}) => {
        const element = document.createElement('div');
        element.innerHTML = _.join(['hello', 'webpack'], ' ');
        return element;
    }).catch((error) => '组件报错');
}

getComponent().then((component) => {
    document.body.appendChild(component);
})