import _ from 'lodash';

const zhongGuo = () => {
    const zhongGuo = document.createElement('div');
    zhongGuo.innerText = _.join(['我', '爱', '中', '国'], '~');
    document.getElementById('root').appendChild(zhongGuo);
};

export {zhongGuo};