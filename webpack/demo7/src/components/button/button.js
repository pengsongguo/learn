import './button.css'
export default (n = 1) => {
    let button = document.createElement('div');
    button.innerText = `按钮${n}`;
    button.className = 'button';
    document.getElementById('root').appendChild(button);
}