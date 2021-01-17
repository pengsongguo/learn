import _ from 'lodash';

const jingYeSi = () => {
    const jingYeSi = document.createElement('div');
    jingYeSi.innerText = _.join(['床', '前', '明', '月光'], '^');
    document.getElementById('root').appendChild(jingYeSi);
};

export {jingYeSi};