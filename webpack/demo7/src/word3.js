import _ from 'lodash';

const Word3 = () => {
    let word3 = document.createElement('div');
    let wordArr3 = ['举', '头', '望', '明', '月'];
    word3.innerText = _.join(wordArr3, '+');
    document.getElementById('root').appendChild(word3);
};

const Word4 = () => {
    let word4 = document.createElement('div');
    word4.innerText = '低头思故乡';
    document.getElementById('root').appendChild(word4);
};

export {Word3, Word4};