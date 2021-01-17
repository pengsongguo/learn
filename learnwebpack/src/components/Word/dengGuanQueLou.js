const dengGuanQueLou = () => {

    return import('lodash').then(({default: _}) => {
        const dengGuanQueLou = document.createElement('div');
        dengGuanQueLou.innerText = _.join(['白', '日', '依', '山', '尽'], '_');
        return dengGuanQueLou;
    }).catch((error) => console.log(error));
};
document.getElementById('root').addEventListener('click',function () {
    console.log(123);
    dengGuanQueLou().then((component) => {
        document.getElementById('root').appendChild(component);
    });
});
