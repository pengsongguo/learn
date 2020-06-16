import _ from 'lodash'

export default () => {
    let word1 = document.createElement('div');
    let wordArr1 = ['床', '前', '明', '月', '光'];
    word1.innerText = _.join(wordArr1, '~~');
    document.getElementById('root').appendChild(word1);
}