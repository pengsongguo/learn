import './word.scss';
import _ from 'lodash';

export default () => {
    let w1 = _.join(['白', '日', '依', '山', '尽'], '~');
    let word1 = document.createElement('div');
    word1.className='word';
    word1.innerHTML = w1;
    document.getElementById('root').appendChild(word1);
}