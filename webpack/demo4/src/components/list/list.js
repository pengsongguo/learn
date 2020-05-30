import './list.scss'
export default () => {
    let list = document.createElement('ul');
    list.id='List';
    list.innerHTML = `<li>新闻1</li><li>新闻2</li><li>新闻3</li><li>新闻4</li>`;
    document.getElementById('root').appendChild(list);
}